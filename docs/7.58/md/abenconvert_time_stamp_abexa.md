  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendate_time_processing.htm) →  [Time Stamps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamps.htm) →  [Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamps_packed.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Convert%20Time%20Stamps%20in%20Packed%20Numbers%2C%20ABENCONVERT_TIME_STAMP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

Convert Time Stamps in Packed Numbers

This example demonstrates the statements [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_time-stamp.htm) and [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_date_time-stamp.htm).

Source Code   

REPORT demo\_convert\_time\_stamp.
SELECTION-SCREEN: BEGIN OF SCREEN 100 AS WINDOW,
                  BEGIN OF BLOCK bl1 WITH FRAME.
PARAMETERS: date1 TYPE d,
            time1 TYPE t,
            tz1   TYPE ttzz-tzone.
SELECTION-SCREEN  BEGIN OF LINE.
PARAMETERS  dst\_flag AS CHECKBOX.
SELECTION-SCREEN: COMMENT 3(29) text-dst,
                  POSITION POS\_LOW.
PARAMETERS  dst1  TYPE abap\_bool.
SELECTION-SCREEN: END OF LINE,
                  END OF BLOCK bl1,
                  BEGIN OF BLOCK bl2 WITH FRAME.
PARAMETERS  tsout TYPE c LENGTH 19 MODIF ID out.
SELECTION-SCREEN: END OF BLOCK bl2,
                  BEGIN OF BLOCK bl3 WITH FRAME.
PARAMETERS  tz2   TYPE ttzz-tzone.
PARAMETERS: date2 TYPE d         MODIF ID out,
            time2 TYPE t         MODIF ID out,
            dst2  TYPE abap\_bool MODIF ID out.
SELECTION-SCREEN: END OF BLOCK bl3,
                  END OF SCREEN 100.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: date TYPE d,
          time TYPE t,
          ts   TYPE timestamp.
    date1 = sy-datlo.
    time1 = sy-timlo.
    tz1 = tz2 = 'UTC'.
    DO.
      IF sy-index > 1.
        CALL SELECTION-SCREEN 100 STARTING AT 10 10.
        IF sy-subrc <> 0.
          EXIT.
        ENDIF.
      ENDIF.
      date = date1.
      time = time1.
      IF dst\_flag = abap\_false.
        CONVERT DATE date TIME time
                INTO TIME STAMP ts TIME ZONE tz1.
      ELSE.
        CONVERT DATE date TIME time DAYLIGHT SAVING TIME dst1
                INTO TIME STAMP ts TIME ZONE tz1.
      ENDIF.
      CASE sy-subrc.
        WHEN 4.
          MESSAGE 'Time zone set to UTC'
                  TYPE 'I' DISPLAY LIKE 'W'.
        WHEN 8.
          MESSAGE 'Invalid time zone'
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
        WHEN 12.
          MESSAGE 'Invalid input values for date,'
                & ' time or daylight saving time'
                   TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
      ENDCASE.
      CONVERT TIME STAMP ts TIME ZONE tz2
              INTO DATE date TIME time DAYLIGHT SAVING TIME dst2.
      CASE sy-subrc.
        WHEN 4.
          MESSAGE 'Time zone set to UTC'
                  TYPE 'I' DISPLAY LIKE 'W'.
        WHEN 8.
          MESSAGE 'Invalid time zone'
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
        WHEN 12.
          MESSAGE 'Invalid time stamp'
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
      ENDCASE.
      tsout = |{ ts TIMESTAMP = ISO TIMEZONE = 'UTC   ' }|.
      date2 = date.
      time2 = time.
    ENDDO.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).
AT SELECTION-SCREEN OUTPUT.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF screen\_wa-group1 = 'OUT'.
      screen\_wa-input   = '0'.
      screen\_wa-output  = '1'.
    ENDIF.
    MODIFY SCREEN FROM screen\_wa.
  ENDLOOP.

Description   

The program is given a date, a time, and a time zone and converts this information into a time stamp in a [time stamp in a packed number](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamps_packed.htm). The program can also include daylight saving time in its calculations. The resulting time stamp is then converted to the local date and local time of another time zone. The following table shows some possible combinations of input and output, where spc stands for a space and \- for no input or output.

date1

time1

tz1

dst1

ts

tz2

date2

time2

dst2

sy-subrc

16.07.2010

9:10:00 AM

CET

\-

2010-07-16T07:10:00

CET

16.07.2010

9:10:00 AM

X

\-

16.07.2010

9:10:00 AM

CET

X

2010-07-16T07:10:00

CET

16.07.2010

9:10:00 AM

X

\-

16.07.2010

9:10:00 AM

CET

spc

\-

CET

\-

\-

\-

12

16.12.2010

9:10:00 AM

CET

spc

2010-12-16T08:10:00

CET

16.12.2010

9:10:00 AM

\-

\-

16.12.2010

9:10:00 AM

CET

X

\-

CET

\-

\-

\-

12

16.12.2010

9:10:00 AM

AUSTAS

\-

2010-12-15T22:10:00

AUSTAS

16.12.2010

9:10:00 AM

X

\-

The third and fifth lines demonstrate that invalid daylight saving time specifications produce the value 12 in sy-subrc.