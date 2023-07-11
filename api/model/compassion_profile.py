from marshmallow import post_load

from .missionary import Missionary, MissionarySchema
from .missionary_profile import MissionaryProfile
from .missionary_type import MissionaryType


class Compassion(Missionary):
    def __init__(self, name, email, church, missionary_type, averages) -> None:
        super().__init__(name, email, church,
                         MissionaryProfile['COMPASSION'], missionary_type, averages)

    def __repr__(self) -> str:
        return f'Compassion({self.name}: {self.missionary_profile} - {self.missionary_type})'


class CompassionSchema(MissionarySchema):
    @post_load
    def make_compassion(self, data, **kwargs):
        return Compassion(**data)
