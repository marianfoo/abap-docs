  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_define_abstract_entity.htm) →  [ABAP CDS - DEFINE ABSTRACT ENTITY, element\_list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_element_list.htm) → 

ABAP CDS - DEFINE ABSTRACT ENTITY, element

Syntax

... *\[*[@element\_annot1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_annotation.htm)*\]*
    *\[*[@element\_annot2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list_annotation.htm)*\]*
    ...
    *{* *\[*KEY*\]* name   : [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_typing.htm) *}*
  *|* *{*       \_assoc : [association](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_association.htm) *}* ...

Extras:

[1\. ... @element\_annot](#!ABAP_ADDITION_1@1@)
[2\. ... KEY](#!ABAP_ADDITION_2@2@)

Effect

Specifies an element name or publication of an association \_assoc in the [list of elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_element_list.htm) of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabstract_glosry.htm "Glossary Entry"). name or \_assoc must be used to specify a unique name that complies with the naming rules for [names](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_general_syntax_rules.htm). Here, the name of an association can start with an underscore \_, as recommended. The names of the elements and associations are in the same namespace as the [parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_func_parameter_list.htm) of the table function. Furthermore, name cannot contain any slash (/) characters and cannot be a reserved name in ABAP Dictionary. The reserved names that cannot be used are specified in the database table TRESE.

-   If the addition [association](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_association.htm) is not used, an element is defined that is typed with an elementary data type [typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_typing.htm). The typing determines the data type of the corresponding component of the structured data type represented by the abstract CDS entity.

-   The addition [association](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_association.htm) is used to publish an [association](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_association_glosry.htm "Glossary Entry") of the name name. No component of this name is created in the associated structured data type.

It is not case-sensitive. The blanks in the comma-separated list are ignored and can be omitted.

Addition 1

... @element\_annot

Effect

Specifies annotations for the element. The annotations can be specified in front of every element and every association using [@element\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_list_annotation.htm).

Note

Element annotations can be used to annotate the elements and associations of an abstract CDS entity with semantic attributes.

Addition 2

... KEY

Effect

KEY is used to define the current element as the key element of the current [abstract CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabstract_entity_glosry.htm "Glossary Entry"). Those elements of the [element list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_return_list.htm) can be defined as key elements that are placed without gaps at the start of the list.

Note

The key elements of an abstract CDS entity can be used to create an abstract data model.

Continue
[ABAP CDS - DEFINE ABSTRACT ENTITY, element\_annot](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_list_annotation.htm)
[ABAP CDS - DEFINE ABSTRACT ENTITY, association](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_absent_association.htm)