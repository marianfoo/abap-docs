  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [READ TABLE itab](javascript:call_link\('abapread_table.htm'\)) →  [READ TABLE - result](javascript:call_link\('abapread_table_outdesc.htm'\)) → 

READ TABLE - transport\_options

[Quick Reference](javascript:call_link\('abapread_table_itab_shortref.htm'\))

Syntax

... *\[*COMPARING *{* *{* [comp1 comp2 ...](javascript:call_link\('abenitab_components.htm'\))*}**|**{*ALL FIELDS*}**|**{*NO FIELDS*}* *}**\]*
    *\[*TRANSPORTING *{* *{* [comp1 comp2 ...](javascript:call_link\('abenitab_components.htm'\))*}**|**{*ALL FIELDS*}* *}**\]* ...

Effect

The addition COMPARING compares the specified components comp1 comp2 ... (or the subareas or attributes) in a found row before they are transported with the corresponding components of the work area. If ALL FIELDS is specified, all components are compared. If no NO FIELDS is specified, no components are compared. If the content of the compared components is identical, sy-subrc is set to 0. Otherwise it is set to 2. The found row is assigned to the work area independently of the result of the comparison.

If the addition TRANSPORTING is specified, only the specified components comp1 comp2 ... (and their subareas) in the found row are assigned to the corresponding components of the work area (or their subareas). If ALL FIELDS is specified, all the components are assigned.

COMPARING must be specified before TRANSPORTING. The components comp1 comp2 ... are specified according to the rules in the section [Specifying Components](javascript:call_link\('abenitab_components.htm'\)). This is subject to the restriction that after TRANSPORTING, attributes of classes cannot be addressed using the object component selector.

Example

The READ statement uses a [WHILE](javascript:call_link\('abapwhile.htm'\)) loop to read all rows of the table sflight\_tab one after the other using the primary table index in the work area sflight\_wa. Only fields that are also in the output are transported. The COMPARING addition is used to select all flights in which no seats have yet been booked.

DATA: sflight\_tab TYPE SORTED TABLE OF sflight
                  WITH UNIQUE KEY carrid connid fldate,
      sflight\_wa  LIKE LINE OF sflight\_tab,
      output      TYPE TABLE OF string WITH EMPTY KEY.
DATA subrc TYPE sy-subrc.
SELECT \*
       FROM sflight
       WHERE  carrid = 'LH'
       INTO TABLE @sflight\_tab.
subrc = sy-subrc.
WHILE subrc = 0.
  sflight\_wa-seatsocc = 0.
  READ TABLE sflight\_tab
       INDEX sy-index
       INTO sflight\_wa COMPARING seatsocc
                       TRANSPORTING carrid
                                    connid
                                    fldate
                                    seatsocc.
  CASE sy-subrc.
    WHEN 0.
      APPEND |{ sflight\_wa-carrid } { sflight\_wa-connid } {
                sflight\_wa-fldate } { sflight\_wa-seatsocc } <----!|
        TO output.
      subrc = sy-subrc.
    WHEN 2.
      APPEND |{ sflight\_wa-carrid } { sflight\_wa-connid } {
                sflight\_wa-fldate } { sflight\_wa-seatsocc }|
        TO output.
      subrc = 0.
    WHEN 4 OR 8.
      EXIT.
  ENDCASE.
ENDWHILE.
cl\_demo\_output=>display( output ).