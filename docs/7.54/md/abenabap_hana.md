  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) → 

ABAP and SAP HANA

[SAP HANA](http://help.sap.com/hana) is a platform, independent from AS ABAP, used for high-performance analysis of large volumes of data. SAP HANA works with the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), which is based on in-memory technology.

-   AS ABAP can access the SAP HANA database of a standalone SAP HANA appliance (combined hardware and software system) using a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") and, for example, [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry"). Various tools and accelerators are available for replicating data from the database of an AS ABAP to the SAP HANA database, to enable high-performance analyses.

-   Furthermore, an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") can be implemented as the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). The database tables and other AS ABAP objects managed in ABAP Dictionary are then saved in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"). Database tables of this type can be accessed using [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"), [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") With respect to ABAP programs, SAP HANA databases behave in this case in the same way as a regular relational database. All HANA-specific functions are wrapped by the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") and access is optimized to the greatest extent possible. It also enables access to the special database objects [SAP HANA views](javascript:call_link\('abenhana_view_glosry.htm'\) "Glossary Entry") and [database procedures](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") written in [SQL Script](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry").

To exploit the in-memory properties of the SAP HANA database in an optimum way, however, application logic must be passed in a suitable form from AS ABAP to the SAP HANA database. This can be done, for example, using suitably programmed [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry") or by using [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry") in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") or in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). If the anchor methods in ABAP SQL or ABAP CDS are not enough, parts of the application logic must be programmed separately under [SAP HANA XS](javascript:call_link\('abenxs_glosry.htm'\) "Glossary Entry") in a tool such as [SAP Web IDE for SAP HANA](javascript:call_link\('abensap_web_ide_for_sap_han_glosry.htm'\) "Glossary Entry"). The following methods are available, with the most complex listed first:

-   Modeling of [SAP HANA views](javascript:call_link\('abenhana_view_glosry.htm'\) "Glossary Entry") transformed internally to [HANA-specific SQL](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.03/en-US) or [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry").

-   Attribute views - Selected columns of joins between tables. Attribute views are created in a graphical tool and transformed internally to SQL.

-   Analytic views - A combination of table data and aggregated data from one or more tables. Analytic views are created in a graphical tool and transformed internally to SQL.

-   Calculation views - A combination of table data or data from other views in which complex conditions and calculations are possible. Calculation views are either created in a graphical tool and transformed internally to SQLScript or can be programmed using SQLScript.

-   Programming of dedicated [database procedures](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") in [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry"). This programming can be done as follows:

-   In [SAP Web IDE for SAP HANA](javascript:call_link\('abensap_web_ide_for_sap_han_glosry.htm'\) "Glossary Entry")

-   As [ABAP Managed Database Procedures](javascript:call_link\('abenabap_managed_db_proc_glosry.htm'\) "Glossary Entry") in special methods of ABAP classes

-   Using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") methods (usually [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry"))

-   Programming of dedicated [database procedures](javascript:call_link\('abendatabase_procedure_glosry.htm'\) "Glossary Entry") in [L](javascript:call_link\('abenllang_glosry.htm'\) "Glossary Entry"). This programming is only allowed internally at SAP and not for customers and partners.

The [SAP HANA XS](javascript:call_link\('abenxs_glosry.htm'\) "Glossary Entry") framework is available for development of HANA objects. Here, the current [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry") must be distinguished from its predecessor, [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry"). The XSC objects are intended for migration to XSA.

The following sections show specific methods that can be used when accessing objects of the SAP HANA database from ABAP programs:

-   [ABAP-specific session variables in SAP HANA](javascript:call_link\('abenhana_session_variables.htm'\))

-   [Cached views in SAP HANA](javascript:call_link\('abenhana_cached_views.htm'\)).

-   [Logical schemas for SAP HANA](javascript:call_link\('abenlogical_database_schemas.htm'\))

-   [Settings transaction attributes for SAP HANA](javascript:call_link\('abenhana_set_transaction.htm'\))

-   [Data aging in SAP HANA](javascript:call_link\('abenhana_data_aging.htm'\))

-   [Access to objects in SAP HANA XS](javascript:call_link\('abensap_hana_access.htm'\))

Alongside these methods, [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") methods can be used to access all accessible objects in the SAP HANA database.

Note

SAP HANA views cannot be created using Native SQL, since the description language is XML-based, not SQL-based.

Continue
[ABAP-Specific Session Variables in SAP HANA](javascript:call_link\('abenhana_session_variables.htm'\))
[Cached Views in SAP HANA](javascript:call_link\('abenhana_cached_views.htm'\))
[Logical Schemas for SAP HANA](javascript:call_link\('abenlogical_database_schemas.htm'\))
[Setting Transaction Behavior for SAP HANA](javascript:call_link\('abenhana_set_transaction.htm'\))
[Data Aging in SAP HANA](javascript:call_link\('abenhana_data_aging.htm'\))
[Access to Objects in SAP HANA XS](javascript:call_link\('abensap_hana_access.htm'\))
[L, Internal SAP Programming Language for HANA](javascript:call_link\('abenllang_internal.htm'\))
[ABAP and SAP HANA, Examples](javascript:call_link\('abenabap_and_hana_abexas.htm'\))