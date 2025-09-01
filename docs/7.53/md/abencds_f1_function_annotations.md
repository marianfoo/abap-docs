  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) → 

ABAP CDS - DEFINE TABLE FUNCTION, function\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) in the definition of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) as a function notation. The character @ must be placed in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #TABLE\_FUNCTION.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [AccessControl Annotations](#abencds-f1-function-annotations-1--------clientdependent-annotations--obsolete----@ITOC@@ABENCDS_F1_FUNCTION_ANNOTATIONS_2)

-   [ClientHandling Annotations](#abencds-f1-function-annotations-3--------dataaging-annotations---@ITOC@@ABENCDS_F1_FUNCTION_ANNOTATIONS_4)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

Note

Alongside the function annotations shown here, the globally valid [entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) can also be specified for a table function.

AccessControl Annotations

Defines [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") for the CDS table function.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AccessControl.authorizationCheck

Defines implicit [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") when ABAP SQL is used to access the CDS table function

#CHECK:
If ABAP SQL is used to access the table function, [access control](javascript:call_link\('abencds_authorizations.htm'\)) is applied implicitly if a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") is assigned to the table function. If there is no role for the table function, a syntax check warning occurs.
#NOT\_REQUIRED:
Like #CHECK, but there is no syntax check warning.
#NOT\_ALLOWED:
No [access control](javascript:call_link\('abencds_authorizations.htm'\)) is performed. This produces a syntax check warning in the DCL source code of a role for the table function.
#PRIVILEGED\_ONLY:
Privileged association (evaluated by [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry")).

#CHECK

#CHECK

Notes

-   The value #NOT\_REQUIRED is recommended for CDS table functions not subject to [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") when created, but for which roles can be defined later.

-   The value #NOT\_ALLOWED switches implicit access control off when the CDS table function is accessed in ABAP SQL. The addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) can be used in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause to switch access control off for table functions not annotated with this annotation.

-   [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") does not work for cross-client access. This is why in ABAP SQL the additions [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) and [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) can only be used when accessing CDS entities where no access control takes place. It is recommended that the annotation AccessControl.authorizationCheck:#NOT\_ALLOWED is only specified for CDS table functions that are subject to cross-client access.

-   The annotation AccessControl has further [framework-specific subannotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)).

ClientDependent Annotations (Obsolete)

Obsolete control of [client handling](javascript:call_link\('abencds_func_client_handling_obs.htm'\)) for the CDS table function.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ClientDependent

Defines [client handling](javascript:call_link\('abencds_func_client_handling_obs.htm'\)) when ABAP SQL is used to access the CDS table function (obsolete).

true:
The CDS table function is client-specific. When accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), automatic client handling is performed.
false:
The CDS table function is a cross-client table function. No automatic client handling is performed.

\-

true

Notes

-   The obsolete annotation @ClientDependent is replaced by the annotation @ClientHandling.type.

-   The obsolete annotation @ClientDependent does not have a default value if it is not used. If neither of the annotations @ClientDependent or @ClientHandling.type are specified, the default values of the @ClientHandling annotation apply.

-   The obsolete annotation @ClientDependent cannot be specified together with the annotation @ClientHandling.type.

ClientHandling Annotations

Control of the [client handling](javascript:call_link\('abencds_func_client_handling.htm'\)) for the CDS table function.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ClientHandling.type

Defines [client handling](javascript:call_link\('abencds_func_client_handling.htm'\)) when ABAP SQL is used to access the CDS table function.

#CLIENT\_DEPENDENT:
The CDS table function is client-specific. When accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), automatic client handling is performed.
#CLIENT\_INDEPENDENT:
The CDS table function is a cross-client function. No automatic client handling is performed.

#CLIENT\_DEPENDENT

#CLIENT\_DEPENDENT

Notes

-   Any other annotations specified using the [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") ClientHandling and any other values than those shown here cannot be specified in the definition of a CDS table function.

-   An annotation @ClientHandling cannot be specified together with the obsolete annotation @ClientDependent.

DataAging Annotations

Defines [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") for the CDS table function.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

DataAging.noAgingRestriction

Defines how [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") is respected on a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") when the CDS table function is accessed using ABAP SQL.

true:
ABAP SQL reads all data
false:
ABAP SQL reads current data only

false

true