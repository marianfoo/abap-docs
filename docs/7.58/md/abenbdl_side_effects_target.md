  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm) →  [RAP - side effects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20side%20effect%2C%20Targets%2C%20ABENBDL_SIDE_EFFECTS_TARGET%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - side effect, Targets

Syntax

... field *{* MyField
          *|* \*
          *|* \_assoc.MyField *}*
   *|* permissions *{*( field MyField )
                 *|* ( action MyAction )
                 *|* ( \_assoc.*{*field *|* action*}* )
                 *|* ( update *|* delete )
                 *|* ( *{*create *|* update *|* delete*}* \_assoc ) *}*
   *|* $self
   *|* entity \_MyAssoc
   *|* messages

Variants:

[1\. ... field ...](#!ABAP_VARIANT_1@1@)
[2\. ... permissions ...](#!ABAP_VARIANT_2@2@)
[3\. ... $self](#!ABAP_VARIANT_3@3@)
[4\. ... entity](#!ABAP_VARIANT_4@4@)
[5\. ... messages](#!ABAP_VARIANT_5@5@)

Effect

This topic lists the BO properties that can be used as targets Targets for [side effects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_side_effects.htm).

One type of side effect can affect multiple targets. The specifier determining the type of target must be defined explicitly for each target. Example:
side effects { field MyField affects field Field1, field Field2, action Action1, action Action2*\[*, ...*\]* }

It is possible to group multiple targets using brackets. For example, the following groupings are possible:

-   ... affects field(Field1, Field2) ...
-   ... affects field \_Assoc.(Field1, Field2) ...
-   ... affects  permissions(field (Field1, Field2)) ...
-   ... affects  permissions(field Field1, field Field2) ...
-   ... affects entity (\_Assoc1, \_Assoc2) ...
-   ... affects entity \_Assoc1.(\_ItemAssoc1, \_ItemAssoc2) ...

Variant 1   

... field ...

Effect

-   The specified field MyField is reloaded when the side effect is triggered. One or more fields can be specified as side effect target.
-   The asterisk \* reloads all fields of the same entity instance.
-   It is also possible to specify fields from other entity instances as targets. They must be defined via an association path \_assoc.MyField.

Variant 2   

... permissions ...

Effect

The [feature](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_feature_control_glosry.htm "Glossary Entry") and [authorization control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_auth_control_glosry.htm "Glossary Entry") of the specified properties are reloaded when the side effect is triggered. The following permissions are available:

-   Fields: permissions(field MyField)
-   Actions: permissions(field MyField)
-   Update or delete operation: permissions (update|delete)

You can also specify permissions for elements and operations of associated entities via association path:

-   Fields and actions: permissions ( \_assoc.*{*field*|*action*}* )
-   Operations: permissions ( *{*create*|*update*|*delete*}* \_assoc )

Multiple permissions can be listed in brackets, separated by commas. Example: permissions(action MyActionFC, update).

Variant 3   

... $self

Effect

The current RAP BO entity is reloaded.

Variant 4   

... entity

Effect

The specified associated entity \_MyAssoc is reloaded when the side effect is triggered.

Variant 5   

... messages

Effect

All messages stored in the [response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry") reported are reloaded when the side effect is triggered.