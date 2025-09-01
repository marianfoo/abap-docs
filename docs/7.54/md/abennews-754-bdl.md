  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.54](javascript:call_link\('abennews-754.htm'\)) →  [ABAP RESTful Programming Model in Release 7.54](javascript:call_link\('abennews-754-restful.htm'\)) → 

ABAP BDL in Release 7.54

[1\. Addition in place of the statement late numbering](#!ABAP_MODIFICATION_1@1@)

[2\. Addition in class ... unique](#!ABAP_MODIFICATION_2@2@)

[3\. External name of an action](#!ABAP_MODIFICATION_3@3@)

[4\. Static field control](#!ABAP_MODIFICATION_4@4@)

Modification 1

Addition in place of the Statement late numbering

The addition in place of the [BDL](javascript:call_link\('abenabap_bdl.htm'\)) statement [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) now indicates that a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") uses its own key fields for late numbering. The key fields are written to the special values. These are known temporarily, which means that the derived types for entities do not contain an addition field %PID.

Modification 2

Addition in class ... unique

A [behavior definition](javascript:call_link\('abenbehavior_definition_glosry.htm'\) "Glossary Entry") can now specify one or more classes that allow the [behavior implementations](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry") of a business object. This is possible in two places:

-   In the [header](javascript:call_link\('abenbdl_implementation.htm'\)) of the business object behavior definition:
    implementation unmanaged ... in class ClassNameX unique ...
    or
    
-   In the [behavior definition](javascript:call_link\('abenabap_behavior_definitions.htm'\)) of an entity:
    define behavior for entity\_name ... implementation in class ClassNameY unique { ... }
    

If the addition implementation in class ... Unique of the statement define behavior is specified, a trigger (such as a create operation) cannot be implemented multiple times in different local [handler classes](javascript:call_link\('abenrpm_handler_class.htm'\)). A behavior for the entity in question can only be implemented in a [behavior pool](javascript:call_link\('abenrpm_global_class.htm'\)) with the specified name ClassNameY. Any other class that attempts this raises an ABAP Compiler error.

Modification 3

External name of an action

An [action](javascript:call_link\('abenbdl_action.htm'\)) can now also be given an external name:

action ActionName external ActionWithAVeryLongExternalName
        result \[0..1\] OutputParameter;

The external name can be up to 128 characters long. It will only be exposed in the OData metadata. It is ignored by ABAP. An action cannot, for example, be addressed using the external name in Entity Manipulation Language.

Modification 4

Static Field Control

Within the statement define behavior for CDSEntityName { ... }, [fields](javascript:call_link\('abenbdl_field.htm'\)) of the entity CDSEntityName can be specified to which certain access restrictions apply:

-   field(read only) FieldName;
    The field FieldName cannot be modified by the operations create and update.
    
-   field(mandatory) FieldName;
    The field FieldName must be given a value in create operations. In update operations, it must not be given the null value.