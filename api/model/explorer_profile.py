from marshmallow import post_load

from .missionary import Missionary, MissionarySchema
from .missionary_profile import MissionaryProfile
from .missionary_type import MissionaryType


class Explorer(Missionary):
    def __init__(self, name, email, church, missionary_type, averages) -> None:
        super().__init__(name, email, church,
                         MissionaryProfile['EXPLORER'], missionary_type, averages)

    def __repr__(self) -> str:
        return f'Explorer({self.name}: {self.missionary_profile} - {self.missionary_type})'


class ExplorerSchema(MissionarySchema):
    @post_load
    def make_explorer(self, data, **kwargs):
        return Explorer(**data)
