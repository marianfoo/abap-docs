  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.54](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-754.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Dictionary%20in%20ABAP%20Release%207.54%2C%20ABENNEWS-754-DDIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Dictionary in ABAP Release 7.54

[1\. New Built-In Data Types](#!ABAP_MODIFICATION_1@1@)
[2\. Flagging of Obsolete Data in Check Tables](#!ABAP_MODIFICATION_2@2@)
[3\. Dynamic Cached Views](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Built-In Data Types

The following new [built-in data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm) were introduced in ABAP Dictionary:

-   [Decimal floating point numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_decimal_floating_point.htm)
    -   [DECFLOAT16](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   [DECFLOAT34](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
-   [Date fields, time fields, and time stamp fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_date_time_types.htm)
    -   [DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
    -   [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)
-   [Geodata types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_geo_data.htm)
    -   [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)

These data types are currently only supported by SAP HANA databases. These types can be mapped to HANA-specific data types but not to other vendor-specific data types. [ABAP-managed database objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry") where these types are used can only be created on SAP HANA databases.

Modification 2   

Flagging of Obsolete Data in Check Tables

A special column can be used to [flag obsolete data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_deprecation.htm) in check tables. This flag modifies [input checks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_checks.htm) and [input help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_value_help.htm) in dynpros and Web Dynpros.

This flag was ported back to all releases including ABAP release 7.40.

Modification 3   

Dynamic Cached Views

[Dynamic cached views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_cache_glosry.htm "Glossary Entry") are a kind of [HANA tuning object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_tuning_object_glosry.htm "Glossary Entry") defined using the statement [DEFINE DYNAMIC CACHE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_dynamic_cache.htm). A dynamic cache is a DDIC integration of an SAP HANA [Dynamic Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1).