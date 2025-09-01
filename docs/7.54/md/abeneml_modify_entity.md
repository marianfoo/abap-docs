---
title: "ABAP EML - MODIFY ENTITY"
description: |
  Syntax MODIFY ENTITY entity_name CREATE FROM instance_create CREATE BY assoc_name FROM it_instance_cba UPDATE FROM it_instance_u DELETE FROM it_instance_d EXECUTE action_name FROM it_instance_a RESULT it_result_a  DATA(result_action) FAILED   it_failed  DATA(it_f
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_modify_entity.htm"
abapFile: "abeneml_modify_entity.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "data", "abeneml", "modify", "entity"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Entity Manipulation Language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) →  [ABAP EML - MODIFY ENTITIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_modify_entities.htm) → 

ABAP EML - MODIFY ENTITY

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

The short form MODIFY ENTITY is intended for the special case where only a single entity is operated on. In this case, access via the [business object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbusiness_object_glosry.htm "Glossary Entry") (the [root entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_entity_glosry.htm "Glossary Entry") root\_name) is not necessary.

The following points apply for the syntax of the statement MODIFY ENTITY:

-   The ENTITY entity\_name is specified once.

-   An alias of the entity cannot be used since no context of the business object is known.

-   This is followed by a list of the change operations, grouped by entity (schema):
        MODIFY ENTITY entity\_name
           operation
          *\[*operation ...*\]*

For more information on syntax elements, see [MODIFY ENTITIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_modify_entities.htm).