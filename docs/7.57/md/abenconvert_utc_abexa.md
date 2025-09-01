  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [Time Stamps](javascript:call_link\('abentime_stamps.htm'\)) →  [Time Stamp Fields with Time Stamp Type](javascript:call_link\('abenutclong.htm'\)) →  [Conversion Statements for Time Stamp Fields](javascript:call_link\('abentimestamp_conversions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Convert Time Stamp in Time Stamp Field, ABENCONVERT_UTC_ABEXA, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Convert Time Stamp in Time Stamp Field

This example demonstrates the statements [CONVERT INTO UTCLONG](javascript:call_link\('abapconvert_date_utclong.htm'\)) and [CONVERT UTCLONG](javascript:call_link\('abapconvert_utclong.htm'\)).

Source Code   

REPORT demo\_convert\_into\_utclong.
SELECTION-SCREEN: BEGIN OF SCREEN 100 AS WINDOW,
BEGIN OF BLOCK bl1 WITH FRAME.
PARAMETERS: date1 TYPE d,
            time1 TYPE t,
            tz1   TYPE ttzz-tzone.
SELECTION-SCREEN  BEGIN OF LINE.
PARAMETERS  dst\_flag AS CHECKBOX.
SELECTION-SCREEN: COMMENT 3(29) TEXT-dst,
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
          ts   TYPE utclong.
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
      TRY.
          IF dst\_flag = abap\_false.
            CONVERT DATE date
                    TIME time
                    TIME ZONE tz1
                    INTO UTCLONG ts.
          ELSE.
            CONVERT DATE date
                    TIME time
                    DAYLIGHT SAVING TIME dst1
                    TIME ZONE tz1
                    INTO UTCLONG ts.
          ENDIF.
        CATCH cx\_sy\_conversion\_no\_date\_time INTO DATA(exc1).
          MESSAGE exc1->get\_text( )
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
        CATCH cx\_sy\_conversion\_no\_date INTO FINAL(exc2).
          MESSAGE exc2->get\_text( )
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
        CATCH cx\_sy\_conversion\_no\_time INTO FINAL(exc3).
          MESSAGE exc3->get\_text( )
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
        CATCH cx\_parameter\_invalid\_range INTO FINAL(exc4).
          MESSAGE exc4->get\_text( )
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
      ENDTRY.
      TRY.
          CONVERT UTCLONG ts
                  INTO DATE date
                       TIME time
                       DAYLIGHT SAVING TIME dst2
                       TIME ZONE tz2.
        CATCH cx\_sy\_conversion\_no\_date\_time INTO exc1.
          MESSAGE exc1->get\_text( )
                  TYPE 'I' DISPLAY LIKE 'E'.
          CONTINUE.
      ENDTRY.
      tsout = ts.
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

The program is given a date, a time, and a time zone and converts these specifications into a time stamp. The program can also include daylight saving time in its calculations. The resulting time stamp is then converted to the local date and local time of another time zone. The following table shows some possible combinations of input and output, where spc stands for a space and \- for no input or output.

date1

time1

tz1

dst1

ts

tz2

date2

time2

dst2

cx\_...

16.07.2010

09:10:00

CET

\-

2010-07-16T07:10:00

CET

16.07.2010

09:10:00

X

\-

16.07.2010

09:10:00

CET

X

2010-07-16T07:10:00

CET

16.07.2010

09:10:00

X

\-

16.07.2010

09:10:00

CET

spc

\-

CET

\-

\-

\-

X

16.12.2010

09:10:00

CET

spc

2010-12-16T08:10:00

CET

16.12.2010

09:10:00

\-

\-

16.12.2010

09:10:00

CET

X

\-

CET

\-

\-

\-

X

16.12.2010

09:10:00

AUSTAS

\-

2010-12-15T22:10:00

AUSTAS

16.12.2010

09:10:00

X

\-

01.01.0001

01:00:00

UTC+4

\-

\-

UTC+4

\-

\-

\-

X

31.12.9999

23:59:59

UTC-4

\-

9999-12-31T23:59:59

UTC

31.12.9999

23:59:59

\-

\-

The third and fifth lines demonstrate that invalid specifications for daylight saving time data raise an exception. The last two lines show how values behave at the limits of the value range. Line 7 produces an invalid time stamp and hence raises an exception. The maximum value in line 8, however, does not calculate a time shift and no exception is raised. If specified, 23:59:58 would raise an exception.