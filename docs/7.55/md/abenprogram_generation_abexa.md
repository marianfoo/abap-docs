  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_generic_program.htm) → 

Program Generation

This example demonstrates how a program is generated using GENERATE SUBROUTINE POOL.

Source Code

REPORT kellerh\_generic\_program.
CLASS display DEFINITION FINAL.
  PUBLIC SECTION.
    TYPES: txt\_line TYPE string,
           txt      TYPE STANDARD TABLE OF txt\_line
                    WITH DEFAULT KEY.
    CLASS-DATA:
      read\_only TYPE abap\_bool READ-ONLY VALUE abap\_true.
    CLASS-METHODS:
      class\_constructor,
      main,
      fill\_abap\_editor   IMPORTING editor TYPE REF TO cl\_gui\_abapedit
                                   text   TYPE  txt,
      read\_abap\_editor   IMPORTING editor TYPE REF TO cl\_gui\_abapedit
                         EXPORTING text   TYPE txt.
  PRIVATE SECTION.
    CLASS-METHODS:
      prepare\_editors,
      create\_abap\_editor
        IMPORTING parent\_container TYPE REF TO cl\_gui\_custom\_container
        RETURNING VALUE(editor)    TYPE REF TO cl\_gui\_abapedit.
ENDCLASS.
CLASS program DEFINITION FINAL.
  PUBLIC SECTION.
    CLASS-METHODS:
      execute IMPORTING check\_only TYPE abap\_bool DEFAULT abap\_false,
      build\_source          RETURNING VALUE(rc) TYPE sy-subrc,
      check\_declarations    RETURNING VALUE(rc) TYPE sy-subrc,
      check\_implementation  RETURNING VALUE(rc) TYPE sy-subrc,
      check\_syntax          RETURNING VALUE(rc) TYPE sy-subrc.
  PRIVATE SECTION.
    CLASS-DATA:
      source TYPE display=>txt.
ENDCLASS.
DATA:
  g\_links   TYPE TABLE OF tline,
  g\_ok\_code TYPE sy-ucomm.
DATA:
  g\_editor1 TYPE REF TO cl\_gui\_abapedit,
  g\_editor2 TYPE REF TO cl\_gui\_abapedit.
DATA:
  g\_declarations   TYPE display=>txt,
  g\_implementation TYPE display=>txt.
START-OF-SELECTION.
  display=>main( ).
CLASS program IMPLEMENTATION.
  METHOD execute.
    DATA program TYPE progname.
    DATA class TYPE string.
    IF check\_declarations( )   <> 0 OR
       check\_implementation( ) <> 0.
      RETURN.
    ENDIF.
    IF build\_source( ) <> 0.
      RETURN.
    ENDIF.
    IF check\_only = abap\_true.
      MESSAGE TEXT-sok TYPE 'S'.
      RETURN.
    ENDIF.
    DATA(source\_name) = 'SOURCE'.
    FIELD-SYMBOLS <source> TYPE STANDARD TABLE.
    ASSIGN (source\_name) TO <source>.
    TRY.
        GENERATE SUBROUTINE POOL <source> NAME program.
      CATCH cx\_sy\_generate\_subpool\_full.
        MESSAGE TEXT-srf TYPE 'I' DISPLAY LIKE 'E'.
        RETURN.
    ENDTRY.
    class = \`\\PROGRAM=\` && program && \`\\CLASS=DEMO\`.
    TRY.
        CALL METHOD (class)=>main.
      CATCH cx\_root INTO DATA(exc) ##CATCH\_ALL.
        MESSAGE exc->get\_text( ) TYPE 'I' DISPLAY LIKE 'E'.
    ENDTRY.
  ENDMETHOD.
  METHOD build\_source.
    DATA idx TYPE sy-tabix.
    DATA subrc TYPE sy-subrc.
    TRY.
        READ REPORT 'DEMO\_GENERIC\_TEMPLATE' INTO source.
        subrc = sy-subrc.
      CATCH cx\_sy\_read\_src\_line\_too\_long.
        subrc = 4.
    ENDTRY.
    IF subrc = 0.
      FIND '\* declarations' IN TABLE source MATCH LINE idx.
      subrc = sy-subrc.
      DELETE source INDEX idx.
      INSERT LINES OF g\_declarations INTO source INDEX idx.
    ENDIF.
    IF subrc = 0.
      FIND '\* implementation' IN TABLE source MATCH LINE idx.
      subrc = sy-subrc.
      DELETE source INDEX idx.
      INSERT LINES OF g\_implementation INTO source INDEX idx.
    ENDIF.
    IF subrc <> 0.
      MESSAGE TEXT-wtl TYPE 'I' DISPLAY LIKE 'E'.
      LEAVE PROGRAM.
    ENDIF.
    rc = check\_syntax( ).
  ENDMETHOD.
  METHOD check\_declarations.
    DATA: code     LIKE source,
          mess     TYPE string,
          lin      TYPE i ##needed,
          wrd      TYPE string ##needed,
          warnings TYPE  STANDARD TABLE OF rslinlmsg.
    "Normal syntax check to get typos
    code = VALUE #( ( \`PROGRAM.\` ) ).
    APPEND LINES OF g\_declarations TO code.
    SYNTAX-CHECK FOR code MESSAGE mess LINE lin WORD wrd
                     ID 'MSG' TABLE warnings
                     PROGRAM sy-repid.
    rc = sy-subrc.
    IF rc <> 0.
      MESSAGE mess TYPE 'I' DISPLAY LIKE 'E'.
      RETURN.
    ENDIF.
    IF warnings IS NOT INITIAL.
      DATA(warning) = warnings\[ 1 \].
      MESSAGE warning-message TYPE 'I' DISPLAY LIKE 'W'.
      RETURN.
    ENDIF.
    "Restrict to declarative statements
    code = VALUE #( ( \`PROGRAM.\` )
                    ( \`CLASS class DEFINITION.\` )
                    ( \`PUBLIC SECTION.\` )
                    ( \`ENDCLASS.\` ) ) ##no\_text.
    INSERT LINES OF g\_declarations INTO code INDEX lines( code ).
    SYNTAX-CHECK FOR code MESSAGE mess LINE lin WORD wrd
                     ID 'MSG' TABLE warnings
                     PROGRAM 'DEMO\_GENERIC\_TEMPLATE'.
    rc = sy-subrc.
    IF rc <> 0.
      MESSAGE TEXT-dcl TYPE 'S' DISPLAY LIKE 'E'.
    ENDIF.
    IF warnings IS NOT INITIAL.
      warning = warnings\[ 1 \].
      MESSAGE warning-message TYPE 'I' DISPLAY LIKE 'W'.
      RETURN.
    ENDIF.
  ENDMETHOD.
  METHOD check\_implementation.
    "Only a very limited set of statements is allowed
    DATA black\_list TYPE cl\_demo\_secure\_abap\_code=>string\_table.
    DATA white\_list TYPE cl\_demo\_secure\_abap\_code=>string\_table.
    "Blacklist
    black\_list = VALUE #(
      ( \`->\` )
      ( \`=>\` )
      ( \`DATA(\` ) ).
    "Whitelist
    white\_list = VALUE #(
      ( \`FIELD-SYMBOLS\`        )
      ( \`CHECK\`                )
      ( \`EXIT\`                 )
      ( \`RETURN\`               )
      ( \`DO\`                   )
      ( \`ENDDO\`                )
      ( \`WHILE\`                )
      ( \`ENDWHILE\`             )
      ( \`CASE\`                 )
      ( \`WHEN\`                 )
      ( \`ENDCASE\`              )
      ( \`IF\`                   )
      ( \`ELSEIF\`               )
      ( \`ELSE\`                 )
      ( \`ENDIF\`                )
      ( \`MOVE-CORRESPONDING\`   )
      ( \`ASSIGN\`               )
      ( \`UNASSIGN\`             )
      ( \`CLEAR\`                )
      ( \`FREE\`                 )
      ( \`FIND\`                 )
      ( \`REPLACE\`              )
      ( \`APPEND\`               )
      ( \`INSERT\`               )
      ( \`MODIFY\`               )
      ( \`DELETE\`               )
      ( \`COLLECT\`              )
      ( \`READ\`                 )
      ( \`LOOP\`                 )
      ( \`ENDLOOP\`              )
      ( \`SORT\`                 ) ).
    rc = cl\_demo\_secure\_abap\_code=>check(
      source\_code  = g\_implementation
      black\_list   = black\_list
      white\_list   = white\_list
      declarations = g\_declarations ).
    IF rc <> 0.
      MESSAGE TEXT-exe TYPE 'S' DISPLAY LIKE 'E'.
    ENDIF.
  ENDMETHOD.
  METHOD check\_syntax.
    DATA: mess     TYPE string,
          lin      TYPE i ##needed,
          wrd      TYPE string ##needed,
          warnings TYPE  STANDARD TABLE OF rslinlmsg.
    "Syntax check for implementations with declarations
    SYNTAX-CHECK FOR source MESSAGE mess LINE lin WORD wrd
                     ID 'MSG' TABLE warnings
                     PROGRAM 'DEMO\_GENERIC\_TEMPLATE'.
    rc = sy-subrc.
    IF rc <> 0.
      MESSAGE mess TYPE 'I' DISPLAY LIKE 'E'.
    ENDIF.
    IF warnings IS NOT INITIAL.
      DATA(warning) = warnings\[ 1 \].
      MESSAGE warning-message TYPE 'I' DISPLAY LIKE 'W'.
      RETURN.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
CLASS display IMPLEMENTATION.
  METHOD class\_constructor.
    "Security checks
    "Not allowed in production systems
    IF cl\_abap\_demo\_services=>is\_production\_system( ).
      MESSAGE TEXT-prs TYPE 'S' DISPLAY LIKE 'W'.
      RETURN.
    ENDIF.
    "Only users who are allowed to use the ABAP Editor
    CALL FUNCTION 'AUTHORITY\_CHECK\_TCODE'
      EXPORTING
        tcode  = 'SE38'
      EXCEPTIONS
        ok     = 1
        not\_ok = 2
        OTHERS = 3.
    IF sy-subrc < 2.
      "Only users who are allowed to create and run $TMP programs
      AUTHORITY-CHECK OBJECT 'S\_DEVELOP'
        ID 'DEVCLASS' FIELD '$TMP'
        ID 'OBJTYPE'  FIELD 'PROG'
        ID 'OBJNAME'  DUMMY
        ID 'P\_GROUP'  DUMMY
        ID 'ACTVT'    FIELD '02'.
      IF sy-subrc =  0.
        "Only users who are allowed to debug and change in the debugger
        DATA(debug\_flag) = ' '.
        CALL FUNCTION 'SYSTEM\_DEBUG\_AUTHORITY\_CHECK'
          EXPORTING
            flag\_replace   = abap\_true
          IMPORTING
            flag\_authority = debug\_flag.
        IF debug\_flag =  'X'.
          "Access permission
          CALL FUNCTION 'RS\_ACCESS\_PERMISSION'
            EXPORTING
              mode                = 'INSERT'
              object              = 'ZDEMO\_PROGRAM'
              object\_class        = 'ABAP'
              suppress\_corr\_check = 'X'
            EXCEPTIONS
              OTHERS              = 4.
          IF sy-subrc = 0.
            read\_only = abap\_false.
            RETURN.
          ENDIF.
        ENDIF.
      ENDIF.
    ENDIF.
    MESSAGE TEXT-aut TYPE 'S' DISPLAY LIKE 'E'.
  ENDMETHOD.
  METHOD main.
    prepare\_editors( ).
    CALL SCREEN 100.
  ENDMETHOD.
  METHOD prepare\_editors.
    DATA:
      container1 TYPE REF TO cl\_gui\_custom\_container,
      container2 TYPE REF TO cl\_gui\_custom\_container.
    g\_declarations = VALUE #(
      ( \`DATA text TYPE string VALUE \`\`Hello, I'm generic!\`\`.\` ) )
      ##no\_text.
    g\_implementation = VALUE #(
      ( \`cl\_demo\_output\` && \`=>display\_text( text ).\` ) )
      ##no\_text.
    CREATE OBJECT container1
      EXPORTING
        container\_name = 'CUSTOM\_CONTAINER1'.
    g\_editor1 = display=>create\_abap\_editor( container1 ).
    CREATE OBJECT container2
      EXPORTING
        container\_name = 'CUSTOM\_CONTAINER2'.
    g\_editor2 = display=>create\_abap\_editor( container2 ).
  ENDMETHOD.
  METHOD create\_abap\_editor.
    CREATE OBJECT editor
      EXPORTING
        parent = parent\_container.
    editor->set\_toolbar\_mode( 0 ).
    editor->set\_statusbar\_mode( 0 ).
    IF read\_only = abap\_true.
      editor->set\_readonly\_mode( 1 ).
    ELSE.
      editor->set\_readonly\_mode( 0 ).
    ENDIF.
  ENDMETHOD.
  METHOD fill\_abap\_editor.
    editor->set\_text( text ).
  ENDMETHOD.
  METHOD read\_abap\_editor.
    editor->get\_text( IMPORTING table = text ).
  ENDMETHOD.
ENDCLASS.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
  SET TITLEBAR  'TITLE\_100'.
  display=>fill\_abap\_editor( editor = g\_editor1
                             text   = g\_declarations ).
  display=>fill\_abap\_editor( editor = g\_editor2
                             text   = g\_implementation ).
ENDMODULE.
MODULE cancel\_0100 INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command\_0100.
  IF g\_ok\_code = 'INFO'.
    CALL FUNCTION 'HELP\_OBJECT\_SHOW'
      EXPORTING
        dokclass = 'RE'
        doklangu = sy-langu
        dokname  = 'DEMO\_GENERIC\_PROGRAM'
      TABLES
        links    = g\_links.
    CLEAR g\_ok\_code.
    RETURN.
  ENDIF.
  IF display=>read\_only = abap\_true.
    MESSAGE TEXT-aut TYPE 'S' DISPLAY LIKE 'E'.
    CLEAR g\_ok\_code.
    RETURN.
  ENDIF.
  display=>read\_abap\_editor( EXPORTING editor = g\_editor1
                             IMPORTING text   = g\_declarations ).
  display=>read\_abap\_editor( EXPORTING editor = g\_editor2
                             IMPORTING text   = g\_implementation ).
  CASE g\_ok\_code.
    WHEN 'EXECUTE'.
      program=>execute( ).
    WHEN 'CHECK'.
      program=>execute( check\_only = abap\_true ).
    WHEN 'CLEAR'.
      CLEAR: g\_declarations,
             g\_implementation.
  ENDCASE.
  CLEAR g\_ok\_code.
ENDMODULE.

Description

The program allows declaration statements to be entered in a declaration part and operational statements to be entered in an implementation part. These entries are inserted consecutively into a method of a pattern program, which is imported into an internal table using the statement [READ REPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_report.htm). When Execute is selected, the program is generated using [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgenerate_subroutine_pool.htm) and the method is called. Before this happens, the syntax is checked using [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsyntax-check_for_itab.htm).

The ability to enter source code for a generic program presents the greatest potential security risk. The following measures have been taken to avoid abuse of this program:

-   The static constructor of the class display checks whether the program is executed in a production system (a system with production clients). Source code cannot be entered in these systems and no function codes are accepted apart from the display of documentation.

-   The static constructor of the class display checks whether the current user has authorization for ABAP Editor in the current system and development authorization for modifying and executing temporary programs. Only these users can enter source code and execute programs, since all actions possible here are also possible in the development environment.

-   Since developers in particular are tempted to test the vulnerability of their test programs, the available statements are restricted as follows:

-   Only declarative statements can be entered in the declaration part. This is checked using the same syntax check as for the declaration part of a class. This check is made in the method check\_declarations of the class program.

-   Only those statements entered in a white list are valid in the implementation part. A black list prevents the use of other classes or objects (except for the output class CL\_DEMO\_OUTPUT). This check is made in the method check\_implementation of the class program, with the method CHECK of the class CL\_DEMO\_SECURE\_ABAP\_CODE being called. If the statements INSERT, MODIFY, or DELETE are used, the addressed table must be declared in the declaration part. This prevents writes from being performed on database tables.

Hint

If, despite these measures, it is still possible to generate and execute potentially dangerous code with this program without manipulating the program flow or the program data in the debugger, inform the component BC-ABA-LA immediately.