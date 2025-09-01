  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) → 

GENERATE SUBROUTINE POOL

[Quick Reference](javascript:call_link\('abapgenerate_shortref.htm'\))

Syntax

GENERATE SUBROUTINE POOL itab NAME prog *\[*[error\_handling](javascript:call_link\('abapgenerate_subr_error_handling.htm'\))*\]*.

Effect

This statement generates a temporary [subroutine pool](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry"). The source code of the subroutine pool is taken from the internal table itab. The generated subroutine pool is stored internally in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). The eight-character name of the temporary subroutine pool is assigned to the variable prog. The following can be specified for prog:

-   An existing character-like variable
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type PROGNAME is declared.
    

For itab, only a standard table without [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") is permitted. The row type of itab must be character-like. A line of source code in itab can have no more than 255 characters (if the row type has a fixed length, trailing blanks are ignored). In an internal session, a maximum of 36 temporary subroutine pools can be created.

If the source code in itab has a syntax error, the subroutine pool is not generated and initialized using prog. The addition [error\_handling](javascript:call_link\('abapgenerate_subr_error_handling.htm'\)) can be used to analyze syntax errors and generation errors. For the syntax check, the switch configuration of [Switch Framework](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry") is used in the state it had when the current transaction was called.

If an exception is raised when the subroutine pool is generated, the runtime error is handled internally so that no programs are terminated. Instead, sy-subrc is set to the value 8. However, there is still a [database rollback](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") and the corresponding [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") is saved as normal. The addition [SHORTDUMP-ID](javascript:call_link\('abapgenerate_subr_error_handling.htm'\)) can be used to determine the ID of the runtime error.

In the source code of the subroutine pool, subroutines can be called from all programs that are loaded in the same internal session by specifying the program name prog using the statement [PERFORM](javascript:call_link\('abapperform.htm'\)). When a subroutine is called for the first time in the subroutine pool, this is loaded into the internal session, and the event [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is raised.

System Fields

sy-subrc

Meaning

0 (means:

Generation was successful.

4

The source code contains a syntax error.

8

A generation error occurred The resulting runtime error was handled internally.

If a runtime error occurs during the generation process (sy-subrc has the value 8), a database rollback is executed as usual.

Programming Guideline

[Generic Programming](javascript:call_link\('abengeneric_progr_guidl.htm'\) "Guideline")

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [ABAP Command Injections](javascript:call_link\('abengeneric_prog_scrty.htm'\)).

Notes

-   Since subroutines are now obsolete as a method of program modularization, a temporary subroutine pool created using GENERATE SUBROUTINE POOL should only contain a single initial subroutine that calls a method of a local class and does not contain any other functional code.
    
-   The syntax rules of the [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") of the creator program also apply to the subroutine pool created.
    
-   Using the switch configuration from when the transaction was called for the syntax check ensures that the whole transaction is executed using the same switch configuration (guaranteed by Switch Framework).
    
-   The source code in the internal table itab must contain a complete ABAP program, including the [statement that introduces the program](javascript:call_link\('abenprogram_init_statement_glosry.htm'\) "Glossary Entry").
    
-   In a temporary subroutine pool, the same global declarations and editing rules are defined as in the static subroutine pool of the repository (see [table of program types](javascript:call_link\('abenprogram_type_oview.htm'\))).
    
-   The addition REDUCED FUNCTIONALITY of the introductory program statement [PROGRAM](javascript:call_link\('abapprogram.htm'\)) also works in temporary subroutine pools and its use is recommended to reduce their resource use.
    
-   Temporarily created subroutine pools can be executed in ABAP Debugger in single steps.
    
-   A temporary subroutine pool created for an internal session cannot be deleted explicitly. It remains available from the time it is created up to the point where the internal session is closed.
    
-   The eight-character internal name of a temporary subroutine pool begins with "%\_T". This prefix is reserved for temporary subroutine pools.
    
-   GENERATE SUBROUTINE POOL should only be used in exceptional cases in application programs. ABAP provides many other means of dynamic programming, which generally make creating source code dynamically unnecessary (see the list in [dynamic program processing](javascript:call_link\('abenabap_language_dynamic.htm'\))).
    

Example

Creates and generates (dynamically) a subroutine pool that implements the event block LOAD-OF-PROGRAM and two subroutines. Depending on the return code sy-subrc, a subroutine is called or a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") is issued.

DATA tab TYPE STANDARD TABLE OF string WITH EMPTY KEY.
tab = VALUE #(
  ( \`PROGRAM subpool.\`                        )
  ( \`DATA spfli\_tab TYPE TABLE OF spfli.\`     )
  ( \`LOAD-OF-PROGRAM.\`                        )
  ( \`  SELECT \*\` &
    \`         FROM spfli\` &
    \`         INTO TABLE @spfli\_tab.\`         )
  ( \`FORM loop\_at\_tab.\`                       )
  ( \`  DATA spfli\_wa TYPE spfli.\`             )
  ( \`  LOOP AT spfli\_tab INTO spfli\_wa.\`      )
  ( \`    PERFORM evaluate\_wa USING spfli\_wa.\` )
  ( \`  ENDLOOP.\`                              )
  ( \`ENDFORM.\`                                )
  ( \`FORM evaluate\_wa USING l\_wa TYPE spfli.\` )
  ( \`  cl\_demo\_output=>write\_data( l\_wa ).\`   )
  ( \`ENDFORM.\`                                ) ).
GENERATE SUBROUTINE POOL tab NAME DATA(prog)
         MESSAGE                  DATA(mess)
         SHORTDUMP-ID             DATA(sid).
IF sy-subrc = 0.
  PERFORM ('LOOP\_AT\_TAB') IN PROGRAM (prog) IF FOUND.
  cl\_demo\_output=>display( ).
ELSEIF sy-subrc = 4.
  MESSAGE mess TYPE 'I'.
ELSEIF sy-subrc = 8.
  MESSAGE sid TYPE 'I'.
ENDIF.

Example

Creates and generates (dynamically) a subroutine pool that implements a local class. The static method meth of the class can be called using the [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry") of the class.

DATA itab  TYPE TABLE OF string.
DATA class TYPE string.
itab = VALUE #(
  ( \`program.\`                     )
  ( \`class main definition.\`       )
  ( \`  public section.\`            )
  ( \`    class-methods meth.\`      )
  ( \`endclass.\`                    )
  ( \`class main implementation.\`   )
  ( \`  method meth.\`               )
  ( \`    message 'Test' type 'I'.\` )
  ( \`  endmethod.\`                 )
  ( \`endclass.\`                    ) ).
GENERATE SUBROUTINE POOL itab NAME DATA(prog).
class = \`\\PROGRAM=\` && prog && \`\\CLASS=MAIN\`.
CALL METHOD (class)=>meth.

Example

Creates and generates (dynamically) a subroutine pool that implements a local class. The class is instantiated using its [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"), and the instance method meth is called dynamically.

DATA itab  TYPE TABLE OF string.
DATA class TYPE string.
DATA oref TYPE REF TO object.
itab = VALUE #(
  ( \`program.\`                     )
  ( \`class main definition.\`       )
  ( \`  public section.\`            )
  ( \`    methods meth.\`            )
  ( \`endclass.\`                    )
  ( \`class main implementation.\`   )
  ( \`  method meth.\`               )
  ( \`    message 'Test' type 'I'.\` )
  ( \`  endmethod.\`                 )
  ( \`endclass.\`                    ) ).
GENERATE SUBROUTINE POOL itab NAME DATA(prog).
class = \`\\PROGRAM=\` && prog && \`\\CLASS=MAIN\`.
CREATE OBJECT oref TYPE (class).
CALL METHOD oref->('METH').

Executable Example

[Program generation](javascript:call_link\('abenprogram_generation_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_GENERATE\_SUBPOOL\_FULL

-   Cause: No further temporary subroutine pools can be generated.
    Runtime error: GENERATE\_SUBPOOL\_DIR\_FULL
    

CX\_SY\_GEN\_SOURCE\_TOO\_WIDE

-   Cause: The source code is in a table consisting of strings and the table contains rows with more than 255 characters.
    Runtime error: GEN\_SOURCE\_TOO\_WIDE
    

Continue
[GENERATE SUBROUTINE POOL - error\_handling](javascript:call_link\('abapgenerate_subr_error_handling.htm'\))
[GENERATE SUBROUTINE POOL - internal addition](javascript:call_link\('abapgenerate_subr_pool_internal.htm'\))