# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / Obsolete Dictionary Objects

Included pages: 2


### abenddic_obsolete.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Dictionary%20Objects%2C%20ABENDDIC_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Dictionary Objects

The [dictionary objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_object_glosry.htm "Glossary Entry") described in this subnode are obsolete and are only available for reasons of compatibility with older releases.

-   [DDIC - External Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_external_views.htm)

Continue
[DDIC - External Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_external_views.htm)


### abenddic_external_views.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [Obsolete Dictionary Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20External%20Views%20%28Obsolete%29%2C%20ABENDDIC_EXTERNAL_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - External Views (Obsolete)

Note: [SAP HANA XSA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsa_glosry.htm "Glossary Entry") replaces [SAP HANA XSC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsc_glosry.htm "Glossary Entry"). The [access methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_hana_access_xsc.htm) designed specifically for XSC objects are not suitable for XSA objects. After all XSC objects have been migrated to XSA, the access methods designed for XSC became mostly obsolete. [DDIC external views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexternal_view_glosry.htm "Glossary Entry") represent one XSC access method and have become obsolete. More information can be found in SAP Notes [2465027](https://launchpad.support.sap.com/#/notes/2465027) and [3116165](https://launchpad.support.sap.com/#/notes/3116165).

A DDIC external view is a special [DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_glosry.htm "Glossary Entry") that makes an [SAP HANA view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_view_glosry.htm "Glossary Entry") from [SAP HANA XSC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsc_glosry.htm "Glossary Entry") known in ABAP programs. The structure type defined using the view fields of an external view can be referenced in ABAP programs using TYPE. An external view can be specified as a source in [ABAP SQL read](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) statements

DDIC external views can only be created using the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") and only if the current database is an [SAP HANA database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_database_glosry.htm "Glossary Entry"). The SAP HANA view must exist in the [SAP HANA Repository](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_hana_repository_glosry.htm "Glossary Entry").

When a DDIC external view is activated, an alias with the name of the view is created on the SAP HANA database that points to the SAP HANA view. The names of the view fields of the external view can be defined differently from the names of the view fields of the SAP HANA view. The [DDIC runtime object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_runtime_object_glosry.htm "Glossary Entry") of the external view accesses the alias on the SAP HANA database and a mapping of HANA-specific data types to the [built-in types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) in ABAP Dictionary takes place. The following table lists the currently supported HANA-specific data types and indicates which ABAP Dictionary types they are mapped to by default.

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

The mapping of HANA types DATE, TIME, and TIMESTAMP to dictionary types DATN, TIMN, and UTCLONG is not supported.

DDIC external views can be displayed in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm) in the SAP GUI-based ABAP Workbench, but they cannot be maintained there.

A DDIC external view can only be read using ABAP SQL if an SAP HANA database is being accessed in which the associated SAP HANA view exists. If not, the uncatchable exception DBSQL\_TABLE\_UNKNOWN is raised. External views can exist actively and be used as data types in a system whose standard database is not an SAP HANA database. Views of this type cannot, however, be accessed through the [standard connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") using ABAP SQL, only through a [secondary connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") to an SAP HANA database. Conversely, when an SAP HANA view in an SAP HANA database is accessed through a secondary connection in the current system, only an identically named DDIC database table or a DDIC view with suitable structure can exist actively in ABAP Dictionary.

Hints

-   The following restrictions currently apply to the use of DDIC external views in ABAP programs:
    -   The structure of analytic views does not allow them to be read using [SELECT \*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm). The same basic rules apply to the statement SELECT in ABAP SQL as when using the HANA SQL statement SELECT. Here, individual columns and the addition GROUP BY must be specified. If SELECT \* is used, a runtime error occurs.
    -   Parameterized calculation views can be accessed only if a default value is defined for each parameter. If not, reads are canceled and produce a runtime error.
-   DDIC external views should only be used in cases that are not covered by [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry").
-   Access to SAP HANA views in [SAP HANA XS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxs_glosry.htm "Glossary Entry"):
    
    -   SAP HANA views in [SAP HANA XSC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsc_glosry.htm "Glossary Entry") are stored in the SAP HANA Repository and DDIC external views can be used for access to these views from ABAP.
    -   SAP HANA views in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsa_glosry.htm "Glossary Entry"), the successor to [SAP HANA XSC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsc_glosry.htm "Glossary Entry"), are usually [HDI objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhdi_object_glosry.htm "Glossary Entry") for which no DDIC external views can be created. For access from ABAP, other methods must be used such as [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry") or [ADBC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadbc_glosry.htm "Glossary Entry").
    
    [SAP HANA XSC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsc_glosry.htm "Glossary Entry") is not supported by a [SAP HANA Cloud database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_hana_cloud_db_glosry.htm "Glossary Entry") and DDIC external views cannot be used there.
