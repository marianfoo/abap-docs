---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_str_template_timezones DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_str_template_timezones IMPLEMENTATION. METHOD main. TYPES: BEG
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_template_timezone_abexa.htm"
abapFile: "abenstring_template_timezone_abexa.htm"
keywords: ["select", "loop", "do", "if", "method", "class", "data", "types", "internal-table", "abenstring", "template", "timezone", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_tmpl%20-%20Time%20Zones%2C%20ABENSTRING_TEMPLATE_TIMEZONE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_tmpl - Time Zones

The example demonstrates the formatting of a time stamp using time zones.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_template\_timezones DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_template\_timezones IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF timezone,
             tzone    TYPE ttzz-tzone,
             descript TYPE ttzzt-descript,
             datetime TYPE string,
           END OF timezone.
    DATA: timezones TYPE TABLE OF timezone.
    FIELD-SYMBOLS <timezone> TYPE timezone.
    SELECT ttzz~tzone, ttzzt~descript
           FROM ttzz INNER JOIN ttzzt
           ON ttzz~tzone = ttzzt~tzone
           WHERE ttzz~tzone  NOT LIKE '%UTC%' AND
                 ttzzt~langu = 'E'
           INTO CORRESPONDING FIELDS OF TABLE @timezones
           ##too\_many\_itab\_fields.
    FINAL(ts) = utclong\_current( ).
    LOOP AT timezones ASSIGNING <timezone>.
      <timezone>-datetime = |{ ts TIMEZONE  = <timezone>-tzone
                                  TIMESTAMP = USER }|.
    ENDLOOP.
    SORT timezones BY datetime.
    out->begin\_section( 'Timezones Around the World'
      )->write( timezones ).
  ENDMETHOD.
ENDCLASS.

Description   

All time zones with a geographical reference are read from the database table TTZZ into an internal table. A time stamp is created in a time stamp field and, formatted using each of this time zones, and written to the internal table. The internal table is sorted and displayed in accordance with the formatted time stamp.