  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.54](javascript:call_link\('abennews-754.htm'\)) → 

ABAP Dictionary in Release 7.54

[1\. New built-in data types](#!ABAP_MODIFICATION_1@1@)
[2\. Flagging of obsolete data in check tables](#!ABAP_MODIFICATION_2@2@)

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