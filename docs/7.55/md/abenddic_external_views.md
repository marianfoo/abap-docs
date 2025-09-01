  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Dictionary Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_views.htm) → 

DDIC - External Views

A DDIC external view is a special [dictionary view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_view_glosry.htm "Glossary Entry") that [defines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexternal_views.htm) an [SAP HANA view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_view_glosry.htm "Glossary Entry") in [SAP HANA XSC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxsc_glosry.htm "Glossary Entry") in ABAP programs. The structure type defined using the view fields of an external view can be referenced in ABAP programs using TYPE. An external view can be specified as a source in [ABAP SQL read](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_reading.htm) statements

DDIC external views can only be created using the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry") and only if the current database is an [SAP HANA database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry"). The SAP HANA view must exist in the [SAP HANA Repository](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_hana_repository_glosry.htm "Glossary Entry").

When a DDIC external view is activated, an alias with the name of the view is created on the SAP HANA database that points to the SAP HANA view. The names of the view fields of the external view can be defined differently from the names of the view fields of the SAP HANA view. The [runtime object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenruntime_object_glosry.htm "Glossary Entry") of the external view accesses the alias on the SAP HANA database. This performs a mapping of HANA-specific data types to the [built-in types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) in ABAP Dictionary. The following table lists the currently supported HANA-specific data types and indicates which ABAP Dictionary types they are mapped to by default.

HANA Type

Meaning

Type in ABAP Dictionary

SMALLINT

2-byte integer

INT2

INTEGER

4-byte integer

INT4

BIGINT

8-byte integer

INT8

DECIMAL

Packed number

DEC

SMALLDECIMAL

Packed number

DEC

FLOAT

Binary floating point number

FLTP

NVARCHAR

Unicode character string

CHAR

VARBINARY

Byte string

RAW

BLOB

Byte string

RAWSTRING

NCLOB

Unicode character string

STRING

DDIC external views can be displayed in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_tools.htm) in the SAP GUI-based ABAP Workbench, but not maintained.

A DDIC external view can only be read using ABAP SQL if an SAP HANA database is being accessed in which the associated SAP HANA view exists. If not, the uncatchable exception DBSQL\_TABLE\_UNKNOWN is raised. External views can exist actively and be used as data types in a system whose standard database is not an SAP HANA database. Views of this type cannot, however, be accessed through the [standard connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") using ABAP SQL, only through a [secondary connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") to an SAP HANA database. Conversely, when an SAP HANA view in an SAP HANA database is accessed through a secondary connection in the current system, only an identically named DDIC database table or a DDIC view with suitable structure can exist actively in ABAP Dictionary.

Hints

-   The following restrictions currently apply to the use of DDIC external views in ABAP programs:

-   The structure of analytic views do not allow them to be read using [SELECT \*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm). The same basic rules apply to the statement SELECT in ABAP SQL as when using the HANA SQL statement SELECT, with individual columns and the addition GROUP BY needing to be specified. If SELECT \* is used, a runtime error occurs.

-   Calculation views with parameters can be access only if a default value is defined for each parameter. If not, reads are canceled and produce a runtime error.

-   DDIC external views should only be used in those cases that are not covered by [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_glosry.htm "Glossary Entry").

-   Access to SAP HANA views in [SAP HANA XS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxs_glosry.htm "Glossary Entry"):

-   SAP HANA views in [SAP HANA XSC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxsc_glosry.htm "Glossary Entry") are stored in the SAP HANA Repository and DDIC external views can be used for access to these views from ABAP.

-   SAP HANA views in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxsa_glosry.htm "Glossary Entry"), the successor to [SAP HANA XSC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxsc_glosry.htm "Glossary Entry"), are usually [HDI objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhdi_object_glosry.htm "Glossary Entry") for which no DDIC external views can be created. For access from ABAP, other methods must be used such as [AMDP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenamdp_glosry.htm "Glossary Entry") or [ADBC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadbc_glosry.htm "Glossary Entry").