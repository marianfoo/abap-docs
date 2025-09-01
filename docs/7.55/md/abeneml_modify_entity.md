  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - MODIFY ENTITIES](javascript:call_link\('abeneml_modify_entities.htm'\)) → 

ABAP EML - MODIFY ENTITY

\* Work in progress \*

Syntax

MODIFY
  ENTITY entity\_name
    CREATE FROM instance\_create
    CREATE BY \\assoc\_name FROM it\_instance\_cba
    UPDATE FROM it\_instance\_u
    DELETE FROM it\_instance\_d
    EXECUTE action\_name FROM it\_instance\_a
      *\[*RESULT it\_result\_a *|* DATA(result\_action)*\]*
  *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
  *\[*MAPPED   it\_mapped *|* DATA(it\_mapped)*\]*
  *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The short form MODIFY ENTITY is intended for the special case where only a single entity is operated on. In this case, access via the [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") (the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") root\_name) is not necessary.

The following points apply for the syntax of the statement MODIFY ENTITY:

-   The ENTITY entity\_name is specified once.

-   An alias of the entity cannot be used since no context of the business object is known.

-   This is followed by a list of the change operations, grouped by entity (schema):
        MODIFY ENTITY entity\_name
           operation
          *\[*operation ...*\]*

For more information on syntax elements, see [MODIFY ENTITIES](javascript:call_link\('abeneml_modify_entities.htm'\)).