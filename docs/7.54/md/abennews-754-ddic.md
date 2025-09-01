  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-75.htm) →  [Changes in Release 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-754.htm) → 

ABAP Dictionary in Release 7.54

[1\. New built-in data types](#!ABAP_MODIFICATION_1@1@)

[2\. Flagging of obsolete data in check tables](#!ABAP_MODIFICATION_2@2@)

Modification 1

New Built-In Data Types

The following new [built-in data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types_intro.htm) were introduced in ABAP Dictionary:

-   [Decimal floating point numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_decimal_floating_point.htm)
    

-   [DECFLOAT16](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

-   [DECFLOAT34](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

-   [Date fields, time fields, and time stamp fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_types.htm)
    

-   [DATN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

-   [TIMN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

-   [UTCLONG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

-   [Geodata types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_geo_data.htm)
    

-   [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm)

These data types are currently only supported by SAP HANA databases. These types can be mapped to HANA-specific data types but not to other vendor-specific data types. [ABAP-managed database objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_managed_db_object_glosry.htm "Glossary Entry") where these types are used can only be created on SAP HANA databases.

Modification 2

Flagging of Obsolete Data in Check Tables

A special column can be used to [flag obsolete data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_deprecation.htm) in check tables. This flag modifies [input checks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_checks.htm) and [input help](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_value_help.htm) in dynpros and Web Dynpros.

This flag was ported back to all releases including Release 7.40.