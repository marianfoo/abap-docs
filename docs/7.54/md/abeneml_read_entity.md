  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - READ ENTITIES](javascript:call_link\('abenread_behavior.htm'\)) → 

ABAP EML - READ ENTITY

Syntax

READ
  ENTITY entity\_name
     FROM it\_instance
       RESULT it\_result *|* DATA(it\_result)
     BY \\assoc\_name FROM it\_instance\_rba
       RESULT it\_result\_rba *|* DATA(it\_result\_rba)
       LINK   it\_link\_rba *|* DATA(it\_link\_rba)
     EXECUTE action\_name FROM it\_instance\_a
       RESULT it\_result\_a *|* DATA(it\_result\_a)
       LINK   it\_link\_a *|* DATA(it\_link\_a)
    *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
    *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The short form READ ENTITY is intended for the special case where only a single entity is operated on. In this case, accessing via the [business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry") (the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") root\_name) would not be necessary.

The following points apply for the syntax of the statement READ ENTITY:

-   The ENTITY entity\_name is specified once.

-   An [alias](javascript:call_link\('abenbdl_alias.htm'\)) of the entity cannot be used since no context of the business object is known.

-   This is followed by a list of operations on the entity according to the schema:
        ENTITY entity\_name
            operation
           *\[*operation ...*\]*

For more information on syntax elements, see [READ ENTITIES](javascript:call_link\('abenread_behavior.htm'\)).