import datetime as dt

from marshmallow import fields, Schema
from uuid import uuid4


class Missionary:
    def __init__(self, name, email, church,
                 missionary_profile, missionary_type,
                 averages) -> None:
        self.id = uuid4()
        self.name = name
        self.email = email
        self.church = church
        self.missionary_profile = missionary_profile
        self.missionary_type = missionary_type
        self.created_at = dt.datetime.now()
        self.updated_at = dt.datetime.now()
        self.averages = averages

    def __repr__(self) -> str:
        return f'Missionary({self.name}: {self.missionary_profile} - {self.missionary_type})'


class MissionarySchema(Schema):
    id = fields.Str(dump_only=True)
    name = fields.Str(required=True)
    email = fields.Email(required=True)
    church = fields.Str(required=True)
    missionary_profile = fields.Str(required=True)
    missionary_type = fields.Str(required=True)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)
    averages = fields.Dict(required=True)
