from typing import List
import datetime
from pydantic import BaseModel

class CommentBase(BaseModel):
    content: str
    comment_date: datetime.datetime

class CommentCreate(CommentBase):
    pass

class Comment(CommentBase):
    id: int
    ticket_id: int
    user_id: int

    class Config:
        orm_mode = True

class TicketBase(BaseModel):
    subject: str
    description: str
    created_date: datetime.datetime
    modified_date: datetime.datetime
    status: str
    
class TicketCreate(TicketBase):
    pass

class Ticket(TicketBase):
    id: int
    owner_id: int
    comments: List[Comment] = []

    class Config:
        orm_mode = True

class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    is_active: bool
    tickets: List[Ticket] = []