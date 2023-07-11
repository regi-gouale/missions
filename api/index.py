from flask import Flask, jsonify, request

from api.model.compassion_profile import Compassion, CompassionSchema
from api.model.explorer_profile import Explorer, ExplorerSchema
from api.model.life_profile import Life, LifeSchema
from api.model.coordination_profile import Coordination, CoordinationSchema
from api.model.missionary import Missionary, MissionarySchema

from api.model.missionary_type import MissionaryType
from api.model.missionary_profile import MissionaryProfile

from api.model.church import Church


app = Flask(__name__)

missionary_profiles = [
    Compassion(
        name='Leslie Knope',
        email='leslie.knope@hotmail.com',
        church=Church['MAIN'],
        missionary_type=MissionaryType['ITINERANT'],
        averages={
            MissionaryProfile['LIFE']: 4.1,
            MissionaryProfile['COMPASSION']: 5,
            MissionaryProfile['COORDINATION']: 3.5,
            MissionaryProfile['EXPLORER']: 2.5,
            MissionaryType['ITINERANT']: 4,
            MissionaryType['SEDENTARY']: 3,
        }
    ),
    Explorer(
        name='Ron Swanson',
        email='ndri@apekou.com',
        church=Church['GRENOBLE'],
        missionary_type=MissionaryType['SEDENTARY'],
        averages={
            MissionaryProfile['LIFE']: 4.1,
            MissionaryProfile['COMPASSION']: 1.5,
            MissionaryProfile['COORDINATION']: 3.5,
            MissionaryProfile['EXPLORER']: 4.5,
            MissionaryType['ITINERANT']: 1,
            MissionaryType['SEDENTARY']: 3,
        }
    ),
    Coordination(
        name='April Ludgate',
        email='april@lugate.cm',
        church=Church['ANNEMASSE'],
        missionary_type=MissionaryType['ITINERANT'],
        averages={
            MissionaryProfile['LIFE']: 4.1,
            MissionaryProfile['COMPASSION']: 3.5,
            MissionaryProfile['COORDINATION']: 4.5,
            MissionaryProfile['EXPLORER']: 2.5,
            MissionaryType['ITINERANT']: 4,
            MissionaryType['SEDENTARY']: 3,
        }
    ),
    Life(
        name='Andy Dwyer',
        email='andy@dwyer.df',
        church=Church['ANNEMASSE'],
        missionary_type=MissionaryType['ITINERANT'],
        averages={
            MissionaryProfile['LIFE']: 4.1,
            MissionaryProfile['COMPASSION']: 3.5,
            MissionaryProfile['COORDINATION']: 3.5,
            MissionaryProfile['EXPLORER']: 2.5,
            MissionaryType['ITINERANT']: 4,
            MissionaryType['SEDENTARY']: 3,
        }
    ),
]


@app.route('/api/missionaries/compassion')
def get_compassion_profiles():
    schema = CompassionSchema(many=True)
    compassion_profiles = schema.dump(
        filter(lambda t: t.missionary_profile ==
               MissionaryProfile['COMPASSION'], missionary_profiles)
    )
    return jsonify(compassion_profiles)


@app.route('/api/missionaries/explorer')
def get_explorer_profiles():
    schema = ExplorerSchema(many=True)
    explorer_profiles = schema.dump(
        filter(lambda t: t.missionary_profile ==
               MissionaryProfile['EXPLORER'], missionary_profiles)
    )
    return jsonify(explorer_profiles)


@app.route('/api/missionaries/life')
def get_life_profiles():
    schema = LifeSchema(many=True)
    life_profiles = schema.dump(
        filter(lambda t: t.missionary_profile ==
               MissionaryProfile['LIFE'], missionary_profiles)
    )
    return jsonify(life_profiles)


@app.route('/api/missionaries/coordination')
def get_coordination_profiles():
    schema = CoordinationSchema(many=True)
    coordination_profiles = schema.dump(
        filter(lambda t: t.missionary_profile ==
               MissionaryProfile['COORDINATION'], missionary_profiles)
    )
    return jsonify(coordination_profiles)


@app.route('/api/missionaries/all')
def get_missionary_profiles():
    schema = MissionarySchema(many=True)
    profiles = schema.dump(
        filter(lambda t: t.id is not None, missionary_profiles)
    )
    return jsonify(profiles)


@app.route('/api/missionaries/<int:missionary_profile_id>')
def get_missionary_profile(missionary_profile_id):
    missionary_profile = next(
        (missionary_profile for missionary_profile in missionary_profiles if missionary_profile['id'] == missionary_profile_id), None)
    if missionary_profile:
        return jsonify(missionary_profile)
    return jsonify({'message': 'missionary profile not found'}), 404


@app.route('/api/profiles', methods=['POST'])
def add_missionary_profile():
    missionary_profile = {
        'id': missionary_profiles[-1]['id'] + 1,
        'name': request.json['name'],
        'email': request.json['email'],
        'missionary-profile': request.json['missionary-profile'],
        'missionary-type': request.json['missionary-type'],
        'church': request.json['church'],
    }
    missionary_profiles.append(missionary_profile)
    return jsonify(missionary_profile), 201


@app.route('/')
def index():
    return 'Hello, World!'
