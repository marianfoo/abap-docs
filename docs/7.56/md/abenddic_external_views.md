  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Views](javascript:call_link\('abenddic_views.htm'\)) → 

DDIC - External Views

A DDIC external view is a special [DDIC view](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry") that [defines](javascript:call_link\('abenexternal_views.htm'\)) an [SAP HANA view](javascript:call_link\('abenhana_view_glosry.htm'\) "Glossary Entry") in [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry") in ABAP programs. The structure type defined using the view fields of an external view can be referenced in ABAP programs using TYPE. An external view can be specified as a source in [ABAP SQL read](javascript:call_link\('abenabap_sql_reading.htm'\)) statements

DDIC external views can only be created using the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") and only if the current database is an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). The SAP HANA view must exist in the [SAP HANA Repository](javascript:call_link\('abensap_hana_repository_glosry.htm'\) "Glossary Entry").

When a DDIC external view is activated, an alias with the name of the view is created on the SAP HANA database that points to the SAP HANA view. The names of the view fields of the external view can be defined differently from the names of the view fields of the SAP HANA view. The [DDIC runtime object](javascript:call_link\('abenddic_runtime_object_glosry.htm'\) "Glossary Entry") of the external view accesses the alias on the SAP HANA database. This performs a mapping of HANA-specific data types to the [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary. The following table lists the currently supported HANA-specific data types and indicates which ABAP Dictionary types they are mapped to by default.

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

DDIC external views can be displayed in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) in the SAP GUI-based ABAP Workbench, but not maintained.

A DDIC external view can only be read using ABAP SQL if an SAP HANA database is being accessed in which the associated SAP HANA view exists. If not, the uncatchable exception DBSQL\_TABLE\_UNKNOWN is raised. External views can exist actively and be used as data types in a system whose standard database is not an SAP HANA database. Views of this type cannot, however, be accessed through the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") using ABAP SQL, only through a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") to an SAP HANA database. Conversely, when an SAP HANA view in an SAP HANA database is accessed through a secondary connection in the current system, only an identically named DDIC database table or a DDIC view with suitable structure can exist actively in ABAP Dictionary.

Hints

-   The following restrictions currently apply to the use of DDIC external views in ABAP programs:
    -   The structure of analytic views does not allow them to be read using [SELECT \*](javascript:call_link\('abapselect_list.htm'\)). The same basic rules apply to the statement SELECT in ABAP SQL as when using the HANA SQL statement SELECT. Here, individual columns and the addition GROUP BY must be specified. If SELECT \* is used, a runtime error occurs.
    -   Parameterized calculation views can be accessed only if a default value is defined for each parameter. If not, reads are canceled and produce a runtime error.
-   DDIC external views should only be used in cases that are not covered by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").
-   Access to SAP HANA views in [SAP HANA XS](javascript:call_link\('abenxs_glosry.htm'\) "Glossary Entry"):
    
    -   SAP HANA views in [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry") are stored in the SAP HANA Repository and DDIC external views can be used for access to these views from ABAP.
    -   SAP HANA views in [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry"), the successor to [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry"), are usually [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") for which no DDIC external views can be created. For access from ABAP, other methods must be used such as [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") or [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry").
    
    [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry") is not supported by a [SAP HANA Cloud database](javascript:call_link\('abensap_hana_cloud_db_glosry.htm'\) "Glossary Entry") and DDIC external views cannot be used there.