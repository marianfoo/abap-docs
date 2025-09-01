  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754.htm) →  [ABAP RESTful Programming Model in Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754-restful.htm) → 

CDS BDL in Release 7.54

[1\. Addition in place of the statement late numbering](#!ABAP_MODIFICATION_1@1@)
[2\. Addition in class ... unique](#!ABAP_MODIFICATION_2@2@)
[3\. External name of an action](#!ABAP_MODIFICATION_3@3@)
[4\. Static field control](#!ABAP_MODIFICATION_4@4@)

Modification 1

Addition in place of the Statement late numbering

The addition in place of the [BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_bdl.htm) statement [late numbering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_late_numbering.htm) now indicates that a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") uses its own key fields for late numbering. The key fields are written to the special values. These are known temporarily, which means that the derived types for entities do not contain an addition field %PID.

Modification 2

Addition in class ... unique

A [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") can now specify one or more classes that allow the [behavior implementations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbehavior_implement_glosry.htm "Glossary Entry") of a business object. This is possible in two places:

-   In the [header](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_implementation.htm) of the business object behavior definition:
    implementation unmanaged ... in class ClassNameX unique ...
    or

-   In the [behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definitions.htm) of an entity:
    define behavior for entity\_name ... implementation in class ClassNameY unique { ... }

If the addition implementation in class ... Unique of the statement define behavior is specified, a trigger (such as a create operation) cannot be implemented multiple times in different local [handler classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_handler_class.htm). A behavior for the entity in question can only be implemented in a [behavior pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_global_class.htm) with the specified name ClassNameY. Any other class that attempts this raises an ABAP Compiler error.

Modification 3

External name of an action

An [action](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_action.htm) can now also be given an external name:

action ActionName external ActionWithAVeryLongExternalName
        result \[0..1\] OutputParameter;

The external name can be up to 128 characters long. It will only be exposed in the OData metadata. It is ignored by ABAP. An action cannot, for example, be addressed using the external name in Entity Manipulation Language.

Modification 4

Static Field Control

Within the statement define behavior for CDSEntityName { ... }, [fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_field.htm) of the entity CDSEntityName can be specified to which certain access restrictions apply:

-   field(read only) FieldName;
    The field FieldName cannot be modified by the operations create and update.

-   field(mandatory) FieldName;
    The field FieldName must be given a value in create operations. In update operations, it must not be given the null value.