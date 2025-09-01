  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Table Functions](javascript:call_link\('abencds_table_functions.htm'\)) →  [CDS DDL - DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) → 

CDS DDL - DEFINE TABLE FUNCTION, function\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) in the definition of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) as a function notation. The character @ must be placed in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #TABLE\_FUNCTION.

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

-   [AbapCatalog Annotations](#abencds-f1-function-annotations-1-------accesscontrol-annotations---@ITOC@@ABENCDS_F1_FUNCTION_ANNOTATIONS_2)
-   [ClientDependent Annotations (Obsolete)](#abencds-f1-function-annotations-3-------clienthandling-annotations---@ITOC@@ABENCDS_F1_FUNCTION_ANNOTATIONS_4)
-   [DataAging Annotations](#abencds-f1-function-annotations-5-------objectmodel-annotations---@ITOC@@ABENCDS_F1_FUNCTION_ANNOTATIONS_6)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

Hint

Alongside the function annotations shown here, the globally valid [entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) can also be specified for a table function.

AbapCatalog Annotations

Technical settings of a CDS table function.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.dataMaintenance

Can be used to restrict data preview for a CDS table function

#RESTRICTED:
Display allowed with restrictions
#DISPLAY\_ONLY:
Display only. Data preview is allowed
#NOT\_ALLOWED:
Display not allowed

#RESTRICTED

\-

Hints

The annotation AbapCatalog.dataMaintenance defines whether the CDS table function can be displayed or maintained by certain tools such as Data Preview in [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The annotation is evaluated by these tools. Restrictions imposed by that annotation are user-independent and they are evaluated before accessing the data. Additional restrictions imposed by [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") are evaluated during the actual data access, if this is done by ABAP SQL.

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
If ABAP SQL is used to access the table function, [access control](javascript:call_link\('abencds_access_control.htm'\)) is applied implicitly if a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") is assigned to the table function. If there is no role for the table function, a syntax check warning occurs.
#NOT\_REQUIRED:
Like #CHECK, but there is no syntax check warning.
#NOT\_ALLOWED:
No [access control](javascript:call_link\('abencds_access_control.htm'\)) is performed. This produces a syntax check warning in the DCL source code of a role for the table function.
#PRIVILEGED\_ONLY:
Privileged CDS association (evaluated by [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry")).

#CHECK

#CHECK

Hints

-   The value #NOT\_REQUIRED is recommended for CDS table functions not subject to [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") when created, but for which roles can be defined later.
-   The value #NOT\_ALLOWED disables implicit access control when the CDS table function is accessed in ABAP SQL. The addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) can be used in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause to disable access control for table functions not annotated with this annotation.
-   [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") does not work for client-independent access. This is why in ABAP SQL, the addition [USING](javascript:call_link\('abapselect_client.htm'\)) and the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) can only be used when accessing CDS entities where access control is disabled. It is recommended that the annotation AccessControl.authorizationCheck:#NOT\_ALLOWED is only specified for CDS table functions that are subject to client-independent access.
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
The CDS table function is client-dependent. When accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) is applied.
false:
The CDS table function is a client-independent table function. No [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) is applied.

\-

true

Hints

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
The CDS table function is client-dependent. When accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) is applied.
#CLIENT\_INDEPENDENT:
The CDS table function is a client-independent function. No [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) is applied.

#CLIENT\_DEPENDENT

#CLIENT\_DEPENDENT

Hints

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

ObjectModel Annotations

The following subannotations of ObjectModel characterize CDS table functions with respect to the data they deliver.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ObjectModel.usageType.dataClass

Specifies the data category of the CDS view.

A CDS table function can be assigned to one of the following data categories:
#TRANSACTIONAL:
The CDS table function delivers data written or modified in high volume transactions or in background transactions.
#MASTER:
The CDS table function delivers master data. The master data is read in high volume transactions or background transactions, but not written or modified.
#ORGANIZATIONAL:
The CDS table function delivers data that describes organizational structures and customer processes.
#CUSTOMIZING:
The CDS table function delivers data that describes customizing data.
#META:
The CDS table function delivers technical system configuration data or the structure of entities.
#MIXED:
The CDS table function delivers data of mixed data categories.

#MIXED

#MIXED

ObjectModel.usageType.serviceQuality

The quality of the service with respect to the performance that can be expected by the consumer of the CDS table function.

A CDS table function can be assigned to one of the following quality categories:
#A:
The CDS table function can be used for high volume transactions or for background transactions.
#B:
The CDS table function can be used for transactions or for background transactions.
#C:
The CDS table function can be used to query individual objects in transactions.
#D:
The CDS table function can be used for analytical queries.
#X:
The CDS table function is designed for special application cases, such as data migration.
#P:
The CDS table function is used to structure hierarchies of CDS entities and must not be used outside of such a hierarchy.

#X

#X

ObjectModel.usageType.sizeCategory

Specifies the size of the data volume that must be scanned to return the result.

A CDS table function can be assigned to one of the following size categories:
#S:
The expected size of the data volume that needs to be scanned is less than 1000.
#M:
The expected size of the data volume that needs to be scanned is less than 100,000.
#L:
The expected size of the data volume that needs to be scanned is less than 10,000,000.
#XL:
The expected size of the data volume that needs to be scanned is less than 100,000,000.
#XXL:
The expected size of the data volume that needs to be scanned is 100,000,000 or greater.

#S

#S

Hints

-   The above subannotations of ObjectModel can be used to document for which kind of application a table function is intended and which kind of data is expected. This information is especially important in regards of performance that can be expected by the consumer of the function. In contrast to the corresponding [annotations](javascript:call_link\('abencds_view_entity_anno.htm'\)) for DEFINE VIEW ENTITY, however, no detailed rules for specifying values can be given for CDS table functions. It is up to the developer of a function to assess how it is annotated in regard of its performance-relevant properties.
-   The annotation ObjectModel has further [framework-specific subannotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)).