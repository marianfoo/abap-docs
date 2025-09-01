  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20CDS%20Annotations%2C%20ABENCDS_ANNOTATION_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete CDS Annotations

The following CDS annotations are obsolete.

Obsolete AbapCatalog Annotations   

Technical settings of a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.dbHints\[ \].dbSystem

Obsolete: Database system for which a [database hint](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_hint_glosry.htm "Glossary Entry") is specified (evaluated using [SADL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensadl_glosry.htm "Glossary Entry")).
[Consumption.dbHintsCalculatedBy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_frmwrk.htm) should be used instead.

#ADA:
SAP MaxDB
#DB2:
IBM DB2
#DB4:
IBM DB2 for AS/400
#DB6:
IBM DB2 UDB
#INF:
Informix
#MSS:
Microsoft SQL Server
#ORA:
Oracle DB
#HDB:
SAP HANA database
#ASE:
Sybase ASE
#ALL:
all database systems

\-

\-

AbapCatalog.dbHints\[ \].hint

Obsolete: [Database hint](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_hint_glosry.htm "Glossary Entry") (evaluated using [SADL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensadl_glosry.htm "Glossary Entry")).
[Consumption.dbHints\[ \]](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_frmwrk.htm) should be used instead.

Platform-dependent database hint

\-

\-

AbapCatalog.preserveKey

Obsolete: Used before release 7.58 to define the key fields of the [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of the CDS view.

true:
This value was used to specify that the key fields of the CDS-managed DDIC view are defined by the addition [KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v1.htm) of the SELECT list. This is the present behavior.
false:
This value was used to define the key fields of the CDS-managed view as for DDIC database views in ABAP Dictionary, regardless of the addition [KEY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v1.htm). It was also the standard value, when the annotation was not specified. Now, the behavior is always as for the value true.

true

true

-   The [framework-specific annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfrmwrk_annotation_glosry.htm "Glossary Entry") [@Consumption.dbHints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_frmwrk_tables.htm) replaces the [ABAP annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_annotation_glosry.htm "Glossary Entry") [@AbapCatalog.dbHints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_abap_tables.htm) and makes it obsolete. The ABAP annotation is evaluated by frameworks such as SADL and not by the ABAP runtime framework.
-   The annotation @AbapCatalog.preserveKey can be kept in existing data definitions, but it does not have an effect any more and leads to a warning from the syntax check.
-   The change in behavior between release 7.57 and 7.58 for annotation @AbapCatalog.preserveKey is incompatible. The key fields of the CDS-managed DDIC view of an obsolete CDS DDIC-based view are defined differently now for views where the annotation was not specified or where it was specified with the value false.

ClientDependent Annotations (Obsolete)   

Defines [client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_client_handling_obs.htm) for the CDS view (obsolete).

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ClientDependent

Defines [client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_client_handling_obs.htm) when ABAP SQL is used to access the CDS view (obsolete).

true:
The CDS view is client-dependent. The view fields of the CDS entity do not cover a client column, from the perspective of an ABAP program. When accessed using [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm), [implicit client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_client_handling.htm) is applied.
false:
The CDS view is a client-independent view. No [implicit client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_client_handling.htm) is applied.

\-

true

Hints

-   The obsolete annotation @ClientDependent is replaced by the annotations @ClientHandling.type and @ClientHandling.algorithm.
-   The obsolete annotation @ClientDependent does not have a default value if it is not used. If neither of the annotations @ClientDependent or @ClientHandling are specified, the default values of the @ClientHandling annotations apply.
-   The obsolete annotation @ClientDependent cannot be specified together with the annotation @ClientHandling.