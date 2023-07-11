from marshmallow import post_load

from .missionary import Missionary, MissionarySchema
from .missionary_profile import MissionaryProfile
from .missionary_type import MissionaryType


class Coordination(Missionary):
    def __init__(self, name, email, church, missionary_type, averages) -> None:
        super().__init__(name, email, church,
                         MissionaryProfile['COORDINATION'], missionary_type, averages)

    def __repr__(self) -> str:
        return f'Coordination({self.name}: {self.missionary_profile} - {self.missionary_type})'


class CoordinationSchema(MissionarySchema):
    @post_load
    def make_coordination(self, data, **kwargs):
        return Coordination(**data)
