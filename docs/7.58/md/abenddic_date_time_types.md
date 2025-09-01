---
title: "DDIC - Date Fields, Time Fields, and Time Stamp Fields"
description: |
  The following data types in ABAP Dictionary describe date fields, time fields, and time stamp fields: -   Date Types, Time Types, and Time Stamp Types(#abenddic-date-time-types-1-------character-like-date-fields-and-time-fields---@ITOC@@ABENDDIC_DATE_TIME_TYPES_2) Date Types, Time Types, and Time
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_date_time_types.htm"
abapFile: "abenddic_date_time_types.htm"
keywords: ["insert", "do", "if", "case", "try", "data", "types", "abenddic", "date", "time"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types_prop.htm) →  [DDIC - Special Dictionary Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types_special.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Date%20Fields%2C%20Time%20Fields%2C%20and%20Time%20Stamp%20Fields%2C%20ABENDDIC_DATE_TIME_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion%20for%20improvement:)

DDIC - Date Fields, Time Fields, and Time Stamp Fields

The following data types in ABAP Dictionary describe date fields, time fields, and time stamp fields:

-   [Date Types, Time Types, and Time Stamp Types](#abenddic-date-time-types-1-------character-like-date-fields-and-time-fields---@ITOC@@ABENDDIC_DATE_TIME_TYPES_2)

Date Types, Time Types, and Time Stamp Types   

The following built-in data types in ABAP Dictionary represent real date types, time types, and time stamp types in a database:

-   [DATN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) for date fields in the database.
-   [TIMN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) for time fields in the database.
-   [UTCLONG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) for time stamp fields in the database.

Database fields with these types generally contain only valid values for dates, times, and time stamps in the internal representation of the database. These types are currently only supported by [SAP HANA databases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry").

Hints

-   The dictionary types DATN and TIMN are mapped to the character-like ABAP date type and time type [d](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_date_time.htm) or [t](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_date_time.htm). The built-in ABAP type [utclong](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_date_time.htm), on the other hand, provides a real time stamp type for UTCLONG.
-   The types DATN and TIMN are recommended for saving individual dates and times. Access to dates and times in the corresponding functions and expressions is optimized for these types. In the case of the dictionary types DATS and TIMS, such access may not be possible at all or they may need to be converted to real date and time types.
-   The output formats for fields on dynpros and Web dynpros and in the statements [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm) can be predefined for the types DATN, TIMN, and UTCLONG specific to each user in the [user master record](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_master_record_glosry.htm "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary.

Character-Like Date Fields and Time Fields   

Instances of the following data types in ABAP Dictionary are created on the database using character-like fields:

-   [DATS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) for [date fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendate_field_glosry.htm "Glossary Entry")
    
    From a technical perspective, the built-in data type DATS describes objects of the type CHAR with a length of 8 characters. It is intended to be used for a [calendar date](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalendar_date_glosry.htm "Glossary Entry") with the format YYYYMMDD. However, there is no validity check when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to DATS. In ABAP, DATS is assigned to the special type [d](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_date_time.htm) and the associated rules apply.
    
-   [TIMS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) for [time fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_field_glosry.htm "Glossary Entry")
    
    From a technical perspective, the built-in data type TIMS describes objects of the type CHAR with a length of 6 characters. It is intended to be used for a [time](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenday_time_glosry.htm "Glossary Entry") with the format HHMMSS. However, there is no validity check when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to TIMS. In ABAP, TIMS is assigned to the special type [t](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_date_time.htm) and the associated rules apply.
    
-   [ACCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) for posting periods
    
    From a technical perspective, the built-in data type ACCP describes objects of the type CHAR with a length of 6 characters. It is intended to be used for a posting period with the format YYYYMM. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to ACCP.
    

Hints

-   If possible, the types DATN and TIMN should be used.
-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm) can be predefined for the types DATS and TIMS specific to each user in the [user master record](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_master_record_glosry.htm "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.
-   When a [dynpro field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_field_glosry.htm "Glossary Entry") is represented with reference to the type ACCP (but not in the statements [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm)) and there is enough output length, a point is inserted between the year YYYY and the month MM.