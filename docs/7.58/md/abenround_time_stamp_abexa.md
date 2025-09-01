---
title: "Rounding Time Stamps in Packed Numbers"
description: |
  This example demonstrates different rounding behaviors for time stamps stored in packed numbers. Source Code  Public class definition CLASS cl_demo_round_time_stamp DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC . PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Publ
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenround_time_stamp_abexa.htm"
abapFile: "abenround_time_stamp_abexa.htm"
keywords: ["do", "while", "if", "method", "class", "data", "abenround", "time", "stamp", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamps.htm) →  [Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamps_packed.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Rounding%20Time%20Stamps%20in%20Packed%20Numbers%2C%20ABENROUND_TIME_STAMP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

Rounding Time Stamps in Packed Numbers

This example demonstrates different rounding behaviors for time stamps stored in packed numbers.

Source Code   

\* Public class definition
CLASS cl\_demo\_round\_time\_stamp DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_round\_time\_stamp IMPLEMENTATION.
  METHOD main.
    DATA ts\_pack     TYPE timestamp.
    DATA ts\_packlong TYPE timestampl.
    DATA ts\_utclong  TYPE utclong.
    DATA(frac) = 0.
    WHILE frac < '0.5'.
      GET TIME STAMP FIELD ts\_packlong.
      GET TIME STAMP FIELD ts\_pack.
      ts\_utclong = utclong\_current( ).
      DATA utclong\_2\_short TYPE timestamp.
      utclong\_2\_short =
        cl\_abap\_tstmp=>utclong2tstmp\_short( ts\_utclong ).
      DATA assigned\_to\_short TYPE timestamp.
      assigned\_to\_short =  ts\_packlong ##type.
      DATA moved\_to\_short TYPE timestamp.
      moved\_to\_short = cl\_abap\_tstmp=>move\_to\_short( ts\_packlong ).
      DATA moved\_to\_short\_trunc TYPE timestamp.
      moved\_to\_short\_trunc = cl\_abap\_tstmp=>move\_to\_short\_trunc(
                                                      ts\_packlong ).
      DATA moved TYPE timestamp.
      cl\_abap\_tstmp=>move( EXPORTING tstmp\_src = ts\_packlong
                           IMPORTING tstmp\_tgt = moved ).
      DATA moved\_trunc TYPE timestamp.
      cl\_abap\_tstmp=>move\_trunc( EXPORTING tstmp\_src = ts\_packlong
                                 IMPORTING tstmp\_tgt = moved\_trunc ).
      DATA ts\_pack\_round\_half\_up TYPE timestamp.
      ts\_pack\_round\_half\_up = round( val = ts\_packlong dec = 0 ).
      DATA ts\_pack\_round\_down TYPE timestamp.
      ts\_pack\_round\_down = round( val = ts\_packlong dec = 0
                                  mode =  cl\_abap\_math=>round\_down ).
      DATA ts\_pack\_trunc TYPE timestamp.
      ts\_pack\_trunc = trunc( ts\_packlong ).
      frac = frac( ts\_packlong ).
    ENDWHILE.
    out->write( |Short packed time stamp:            {
         ts\_pack TIMESTAMP = ISO }|
     )->write( |Long packed time stamp:             {
         ts\_packlong TIMESTAMP = ISO }|
     )->write( |UTCLONG time stamp:                 {
         ts\_utclong TIMESTAMP = ISO }|
     )->line(
     )->write( |CL\_ABAP\_TSTMP=>UTCLONG2TSTMP\_SHORT: {
         utclong\_2\_short TIMESTAMP = ISO }|
     )->write( |Assignment with conversion:         {
         assigned\_to\_short TIMESTAMP = ISO }|
     )->write( |CL\_ABAP\_TSTMP=>MOVE\_TO\_SHORT:       {
         moved\_to\_short TIMESTAMP = ISO }|
     )->write( |CL\_ABAP\_TSTMP=>MOVE\_TO\_SHORT\_TRUNC: {
         moved\_to\_short\_trunc TIMESTAMP = ISO }|
     )->write( |CL\_ABAP\_TSTMP=>MOVE:                {
         moved TIMESTAMP = ISO }|
     )->write( |CL\_ABAP\_TSTMP=>MOVE\_TRUNC:          {
         moved\_trunc TIMESTAMP = ISO }|
     )->write( |ROUND half up:                      {
         ts\_pack\_round\_half\_up TIMESTAMP = ISO }|
     )->write( |ROUND down:                         {
         ts\_pack\_round\_down TIMESTAMP = ISO }|
     )->write( |TRUNC:                              {
         ts\_pack\_trunc TIMESTAMP = ISO }| ).
  ENDMETHOD.
ENDCLASS.

Description   

A short packed number time stamp of type TIMESTAMP, a long packed number time stamp of type TIMESTAMPL and a time stamp in a time stamp field of type utclong are created at almost the same point in time.

The example shows the different rounding behaviors when time stamps with fractional seconds are converted to time stamps of type TIMESTAMP without fractional seconds:

-   Using method UTCLONG2TSTMP\_SHORT of class CL\_ABAP\_TSTMP to convert a time stamp field rounds down.
-   Using a simple assignment involving the conversion rule [from p to p](abenconversion_type_p.htm#@@ITOC@@ABENCONVERSION_TYPE_P_1) rounds half up (commercial rounding).
-   Using method MOVE\_TO\_SHORT of class CL\_ABAP\_TSTMP to convert a long time stamp stored as a packed number field rounds half up (commercial rounding).
-   Using method MOVE\_TO\_SHORT\_TRUNC of class CL\_ABAP\_TSTMP to convert a long time stamp stored as a packed number field rounds down.
-   Using method MOVE of class CL\_ABAP\_TSTMP to convert a long time stamp stored as a packed number field rounds half up (commercial rounding).
-   Using method MOVE\_TRUNC of class CL\_ABAP\_TSTMP to convert a long time stamp stored as a packed number field rounds down.
-   Using built-in function [round](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendec_floating_point_functions.htm) without specifying mode for a long time stamp stored as a packed number field rounds half up (commercial rounding).
-   Using built-in function [round](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendec_floating_point_functions.htm) and specifying the appropriate mode mode for a long time stamp stored as a packed number field rounds down.
-   Using built-in function [trunc](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_functions.htm) for a long time stamp stored as a packed number field rounds down.

Since only rounding down a long time stamp stored as a packed number gives the same result as the statement [GET TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_time-stamp.htm) and if that is the expected behavior, the methods with suffix \_TRUNC from CL\_ABAP\_TSTMP or the built-in function [round](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendec_floating_point_functions.htm) with an appropriate mode or [trunc](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_functions.htm) should be used instead of the other methods.