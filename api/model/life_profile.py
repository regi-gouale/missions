from marshmallow import post_load

from .missionary import Missionary, MissionarySchema
from .missionary_profile import MissionaryProfile
from .missionary_type import MissionaryType


class Life(Missionary):
    def __init__(self, name, email, church, missionary_type, averages) -> None:
        super().__init__(name, email, church, MissionaryProfile['LIFE'], missionary_type, averages)

    def __repr__(self) -> str:
        return f'Life({self.name}: {self.missionary_profile} - {self.missionary_type})'


class LifeSchema(MissionarySchema):
    @post_load
    def make_life(self, data, **kwargs):
        return Life(**data)
