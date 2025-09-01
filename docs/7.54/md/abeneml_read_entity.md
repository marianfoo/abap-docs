---
title: "ABAP EML - READ ENTITY"
description: |
  Syntax READ ENTITY entity_name FROM it_instance RESULT it_result  DATA(it_result) BY assoc_name FROM it_instance_rba RESULT it_result_rba  DATA(it_result_rba) LINK   it_link_rba  DATA(it_link_rba) EXECUTE action_name FROM it_instance_a RESULT it_result_a  DATA(it_r
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_read_entity.htm"
abapFile: "abeneml_read_entity.htm"
keywords: ["do", "if", "case", "try", "data", "abeneml", "read", "entity"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Entity Manipulation Language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) →  [ABAP EML - READ ENTITIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenread_behavior.htm) → 

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

The short form READ ENTITY is intended for the special case where only a single entity is operated on. In this case, accessing via the [business object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbusiness_object_glosry.htm "Glossary Entry") (the [root entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_entity_glosry.htm "Glossary Entry") root\_name) would not be necessary.

The following points apply for the syntax of the statement READ ENTITY:

-   The ENTITY entity\_name is specified once.

-   An [alias](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_alias.htm) of the entity cannot be used since no context of the business object is known.

-   This is followed by a list of operations on the entity according to the schema:
        ENTITY entity\_name
            operation
           *\[*operation ...*\]*

For more information on syntax elements, see [READ ENTITIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenread_behavior.htm).