  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Calling and exiting program units](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_call.htm) →  [Calling Executable Programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_submit_report.htm) →  [SUBMIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit.htm) →  [SUBMIT, list\_options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit_list_options.htm) → 

Program Calls, Modifying the Basic List

The example demonstrates how to affect the basic list of a called program.

Source Code

REPORT demo\_program\_submit\_line.
SELECTION-SCREEN BEGIN OF SCREEN 1100.
PARAMETERS: name   TYPE sy-repid
                   DEFAULT 'DEMO\_PROGRAM\_READ\_TABLES' OBLIGATORY,
            width  TYPE i        DEFAULT 80,
            length TYPE i        DEFAULT 0.
SELECTION-SCREEN END OF SCREEN 1100.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS security\_check
      IMPORTING name TYPE sy-repid
      RETURNING value(checked\_name) TYPE sy-repid.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA prog\_type TYPE trdir-subc.
    CALL SELECTION-SCREEN 1100 STARTING AT 10 10.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    SELECT SINGLE subc
           FROM trdir
           WHERE name = @name
           INTO @prog\_type.
    IF sy-subrc <> 0 OR prog\_type <> '1'.
      MESSAGE 'Program not found or wrong type' TYPE 'I'
                                                DISPLAY LIKE 'E'.
      RETURN.
    ENDIF.
    name = security\_check( name ).
    IF  name IS INITIAL.
      MESSAGE 'Program execution not allowed' TYPE 'I'
                                              DISPLAY LIKE 'E'.
      RETURN.
    ENDIF.
    SUBMIT (name) LINE-SIZE width LINE-COUNT length AND RETURN.  ENDMETHOD.
  METHOD security\_check.
    DATA include\_list TYPE HASHED TABLE OF string
                      WITH UNIQUE KEY table\_line.
    AUTHORITY-CHECK OBJECT 'S\_DEVELOP'
      ID 'DEVCLASS' FIELD 'SABAPDEMOS'
      ID 'OBJTYPE'  FIELD 'PROG'
      ID 'OBJNAME'  DUMMY
      ID 'P\_GROUP'  DUMMY
      ID 'ACTVT'    FIELD '16'.
    IF sy-subrc <>  0.
      CLEAR checked\_name.
      RETURN.
    ENDIF.
    SELECT obj\_name
           FROM tadir
           WHERE pgmid = 'R3TR' AND
                object = 'PROG' AND
                devclass = 'SABAPDEMOS'
           INTO TABLE @include\_list. "#EC CI\_SGLSELECT
    TRY.
        checked\_name = cl\_abap\_dyn\_prg=>check\_whitelist\_tab(
          val = name
          whitelist = include\_list ).
      CATCH cx\_abap\_not\_in\_whitelist.
        CLEAR checked\_name.
        RETURN.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

If the called program has no specifications of LINE-SIZE or LINE-COUNT itself in the REPORT statement, the values width and length are used for its basic list.