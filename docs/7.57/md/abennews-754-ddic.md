  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.54](javascript:call_link\('abennews-754.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Dictionary in Release 7.54, ABENNEWS-754-DDIC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ABAP Dictionary in Release 7.54

[1\. New Built-In Data Types](#!ABAP_MODIFICATION_1@1@)
[2\. Flagging of Obsolete Data in Check Tables](#!ABAP_MODIFICATION_2@2@)
[3\. Dynamic Cached Views](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Built-In Data Types

The following new [built-in data types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) were introduced in ABAP Dictionary:

-   [Decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\))
    -   [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\))
    -   [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\))
-   [Date fields, time fields, and time stamp fields](javascript:call_link\('abenddic_date_time_types.htm'\))
    -   [DATN](javascript:call_link\('abenddic_builtin_types.htm'\))
    -   [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\))
    -   [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\))
-   [Geodata types](javascript:call_link\('abenddic_geo_data.htm'\))
    -   [GEOM\_EWKB](javascript:call_link\('abenddic_builtin_types.htm'\))

These data types are currently only supported by SAP HANA databases. These types can be mapped to HANA-specific data types but not to other vendor-specific data types. [ABAP-managed database objects](javascript:call_link\('abenabap_managed_db_object_glosry.htm'\) "Glossary Entry") where these types are used can only be created on SAP HANA databases.

Modification 2   

Flagging of Obsolete Data in Check Tables

A special column can be used to [flag obsolete data](javascript:call_link\('abenddic_deprecation.htm'\)) in check tables. This flag modifies [input checks](javascript:call_link\('abenabap_dynpros_checks.htm'\)) and [input help](javascript:call_link\('abenabap_dynpros_value_help.htm'\)) in dynpros and Web Dynpros.

This flag was ported back to all releases including Release 7.40.

Modification 3   

Dynamic Cached Views

[Dynamic cached views](javascript:call_link\('abendynamic_cache_glosry.htm'\) "Glossary Entry") are a kind of [DDIC tuning object](javascript:call_link\('abenddic_tuning_object_glosry.htm'\) "Glossary Entry") defined using the statement [DEFINE DYNAMIC CACHE](javascript:call_link\('abenddicddl_define_dynamic_cache.htm'\)). A dynamic cache is a DDIC integration of an SAP HANA [Dynamic Result Cache](https://help.sap.com/docs/SAP_HANA_PLATFORM/bed8c14f9f024763b0777aa72b5436f6/bc12a173118548e9be8b69f1d62dfae1.html?version=2.0.02).