  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_tdl.htm) →  [ABAP CDS - TDL for Type Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_types.htm) →  [CDS TDL - DEFINE TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_type.htm) →  [ABAP CDS - Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enumeration_types.htm) →  [CDS TDL - DEFINE TYPE ENUM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_enum_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20CDS%20Enumerated%20Type%2C%20Use%2C%20ABENCDS_ENUM_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS TDL - CDS Enumerated Type, Use

This example demonstrates the use of [CDS enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry").

The following CDS enumerated type DEMO\_CDS\_ENUM\_WEEKDAY has the base type abap.int1, the names of the enumerated constants are abbreviations for the days of the week and the enumerated values are 0 to 6.

@EndUserText.label: 'Days of the week'
define type DEMO\_CDS\_ENUM\_WEEKDAY : abap.int1 enum
{
  @EndUserText.label: 'Monday'
  MON = initial;
  @EndUserText.label: 'Tuesday'
  TUE =       1;
  @EndUserText.label: 'Wednesday'
  WED =       2;
  @EndUserText.label: 'Thursday'
  THU =       3;
  @EndUserText.label: 'Friday'
  FRI =       4;
  @EndUserText.label: 'Saturday'
  SAT =       5;
  @EndUserText.label: 'Sunday'
  SUN =       6;
}

The CDS table function DEMO\_CDS\_TF\_ENUM\_WEEKDAY selects from the database table SFLIGHT.

CDS table function

@EndUserText.label: 'CDS table function, enum demo'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define table function DEMO\_CDS\_TF\_ENUM\_WEEKDAY
returns
{
  key mandt      : s\_mandt;
  key carrid     : s\_carr\_id;
  key connid     : s\_conn\_id;
  key fldate     : s\_date;
      weekday    : int2;
}
implemented by method
  CL\_DEMO\_CDS\_TF\_ENUM=>WEEKDAY;

AMDP function implementation

The AMDP function implementation uses the SAP HANA SQL function WEEKDAY to calculate the integer representation of the day of the week for a given flight date.

METHOD weekday
         BY DATABASE FUNCTION FOR HDB
         LANGUAGE SQLSCRIPT
         OPTIONS READ-ONLY
         USING sflight.
  RETURN
select
mandt,
carrid,
connid,
fldate,
weekday( fldate ) as weekday
from sflight;
ENDMETHOD.

CDS view entity

The CDS view entity DEMO\_CDS\_ENUM\_1 selects from the table function DEMO\_CDS\_TF\_ENUM\_WEEKDAY. It casts the field weekday to the enumerated type DEMO\_CDS\_ENUM\_WEEKDAY.

@EndUserText.label: 'Select from table function'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_ENUM\_1
  as select from DEMO\_CDS\_TF\_ENUM\_WEEKDAY
{
  key carrid,
  key connid,
  key fldate,
      cast( weekday as DEMO\_CDS\_ENUM\_WEEKDAY ) as weekday
}

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_enum\_1 DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_enum\_1 IMPLEMENTATION.
  METHOD main.
    SELECT FROM demo\_cds\_enum\_1 FIELDS \* INTO TABLE @DATA(result).
    out->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

The class selects from the CDS view entity DEMO\_CDS\_ENUM\_1 that casts the integer representation of weekdays to a CDS enumerated type. As a consequence, the column weekday contains the names of the enumerated constants as values.