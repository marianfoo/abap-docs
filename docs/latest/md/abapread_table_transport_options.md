  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [READ TABLE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) →  [READ TABLE, result](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20TABLE%2C%20transport_options%2C%20ABAPREAD_TABLE_TRANSPORT_OPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

READ TABLE, transport\_options

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_itab_shortref.htm)

Syntax

... *\[*COMPARING *{* *{* [comp1 comp2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_components.htm)*}**|**{*ALL FIELDS*}**|**{*NO FIELDS*}* *}**\]*
    *\[*TRANSPORTING *{* *{* [comp1 comp2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_components.htm)*}**|**{*ALL FIELDS*}* *}**\]* ...

Effect

The addition COMPARING compares the specified components comp1 comp2 ... or their subareas or attributes in a found line before they are transported with the corresponding components of the work area. If ALL FIELDS is specified, all components are compared. If no NO FIELDS is specified, no components are compared. If the content of the compared components is identical, sy-subrc is set to 0 and otherwise to 2. The line found is assigned to the work area independently of the result of the comparison.

If the addition TRANSPORTING is specified, only the specified components comp1 comp2 ... or their subareas in the found line are assigned to the corresponding components of the work area or its subareas. If ALL FIELDS is specified, all components are assigned.

COMPARING must be specified in front of TRANSPORTING. The components comp1 comp2 ... are specified according to the rules in the section [Specifying Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_components.htm), with the restriction that after TRANSPORTING, no attributes of classes can be addressed using the object component selector.

Example

The READ statement uses a [WHILE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhile.htm) loop to read all lines of the table sflight\_tab one after the other using the primary table index in the work area sflight\_wa. Only fields that are also in the output are transported. The COMPARING addition is used to select all flights in which no seats have yet been booked.

DATA: sflight\_tab TYPE SORTED TABLE OF sflight
                  WITH UNIQUE KEY carrid connid fldate,
      sflight\_wa  LIKE LINE OF sflight\_tab,
      output      TYPE TABLE OF string WITH EMPTY KEY.
DATA subrc TYPE sy-subrc.
SELECT \*
       FROM sflight
       WHERE carrid = 'LH'
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