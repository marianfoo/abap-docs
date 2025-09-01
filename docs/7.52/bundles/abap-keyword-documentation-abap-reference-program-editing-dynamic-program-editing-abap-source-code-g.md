# ABAP - Keyword Documentation / ABAP - Reference / program editing / Dynamic Program Editing / ABAP Source Code / GENERATE SUBROUTINE POOL

Included pages: 3


### abapgenerate_subroutine_pool.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) → 

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

In the source code of the subroutine pool, subroutines can be called from all programs that are loaded in the same internal session by specifying the program name prog using the statement [PERFORM](javascript:call_link\('abapperform.htm'\)). When a subroutine is called for the first time in the subroutine pool, this is loaded into the internal session, and the event [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) is triggered.

System Fields

sy-subrc

Meaning

0

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

DATA itab TYPE TABLE OF string.
DATA class TYPE string.
itab = VALUE #(
  ( \`program.\`                     )
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

DATA itab TYPE TABLE OF string.
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

[Program Generation](javascript:call_link\('abenprogram_generation_abexa.htm'\))

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


### abapgenerate_subr_error_handling.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) →  [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)) → 

GENERATE SUBROUTINE POOL - error\_handling

[Quick Reference](javascript:call_link\('abapgenerate_shortref.htm'\))

Syntax

... *\[*MESSAGE mess*\]*
    *\[*INCLUDE incl*\]*
    *\[*LINE lin*\]*
    *\[*WORD wrd*\]*
    *\[*OFFSET off*\]*
    *\[*MESSAGE-ID mid*\]*
    *\[*SHORTDUMP-ID sid*\]* ...

Extras:

[1\. ... MESSAGE mess](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDE incl](#!ABAP_ADDITION_2@2@)
[3\. ... LINE lin](#!ABAP_ADDITION_3@3@)
[4\. ... WORD wrd](#!ABAP_ADDITION_4@4@)
[5\. ... OFFSET off](#!ABAP_ADDITION_5@5@)
[6\. ... MESSAGE-ID mid](#!ABAP_ADDITION_6@6@)
[7\. ... SHORTDUMP-ID sid](#!ABAP_ADDITION_7@7@)

Effect

These additions can be used to analyze syntax and generation errors of the [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)) statement. Syntax errors can either arise in the source code specified in itab, or in the [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") integrated using the [INCLUDE](javascript:call_link\('abapinclude_prog.htm'\)) statement. Generation errors can occur, for example, if the program contains errors in declaration statements that are not identified in the static syntax check.

The following can be specified in all operand positions behind these additions:

-   An existing variable that matches the operand type.
    
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable that matches the operand type is declared.
    

Addition 1

... MESSAGE mess

Effect

If the subroutine pool contains one or more syntax errors, the text of the error message for the first syntax error is assigned to the variable mess. A character-like variable or an [inline declaration](javascript:call_link\('abendata_inline.htm'\)) that creates a variable of type string can both be specified for mess.

If a generation error occurs (see the addition SHORTDUMP-ID), mess is also populated with the corresponding error message. If the subroutine pool can be generated, the content of mess remains unchanged.

Addition 2

... INCLUDE incl

Effect

If one or more include programs are included in the subroutine pool and one of these contains the first syntax error of the subroutine pool, the name of this include program is assigned to the variable incl. A character-like variable or an [inline declaration](javascript:call_link\('abendata_inline.htm'\)) that creates a variable of type PROGNAME can both be specified for incl.

If the first syntax error in the source code occurs in itab, incl is assigned the internal name that would have been returned if generation in prog had been successful. This name always begins with "%\_".

If a generation error occurs (see the addition SHORTDUMP-ID), incl is also populated with the name of the corresponding [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry"). If the subroutine pool can be generated, the content of incl is not changed.

Addition 3

... LINE lin

Effect

If the subroutine pool contains one or more syntax errors, the line number of the first syntax error, with reference to the program in which it occurs (either the source code in itab or an integrated include program), is assigned to the variable lin. A variable of type i or an [inline declaration](javascript:call_link\('abendata_inline.htm'\)) that creates a variable of this type can both be specified for lin.

If a generation error occurs (see the addition SHORTDUMP-ID), lin is also populated with the corresponding line number. If the subroutine pool can be generated, the content of lin is not changed.

Addition 4

... WORD wrd

Effect

If the subroutine pool contains one or more syntax errors, the first token with an error is assigned to the variable wrd. A character-like variable or an [inline declaration](javascript:call_link\('abendata_inline.htm'\)) that creates a variable of type string can both be specified for wrd.

If a generation error occurs (see the addition SHORTDUMP-ID), wrd is also populated with the corresponding token. If the subroutine pool can be generated, the content of wrd is not changed.

Addition 5

... OFFSET off

Effect

If the subroutine pool contains one or more syntax errors, the offset of the first token with errors, with reference to the line in the source code, is assigned to the variable off. A variable of type i or an [inline declaration](javascript:call_link\('abendata_inline.htm'\)) that creates a variable of this type can both be specified for off.

If a generation error occurs (see the addition SHORTDUMP-ID), off is also populated with the corresponding offset. If the subroutine pool can be generated, the content of off is not changed.

Addition 6

... MESSAGE-ID mid

Effect

If the subroutine pool contains one or more syntax errors, the key under which the first error message is stored in the database table TRMSG is assigned to the variable mid.

If a generation error occurs (see the addition SHORTDUMP-ID), mid is also populated with the corresponding key. If the subroutine pool can be generated, the content of mid is not changed.

The key of the database table TRMSG is made up of the components SPRAS of length 1, KEYWORD of length 20, and MSGNUMBER of length 4. The component MSGNUMBER is used for a three-character ID. The fourth position can contain a blank character or a letter. For error messages with multiple parts that fill more than one row in the database table TRMSG, all parts have the same three-character ID. The fourth character indicates the part of the message.

The data object mid must have the data type TRMSG\_KEY from ABAP Dictionary, constructed from the components SPRAS with length 1, KEYWORD with length 20, and MSGNUMBER with length 3. An [inline declaration](javascript:call_link\('abendata_inline.htm'\)) creates a structure like this.

Note

The return value in mid only contains the three-character ID of a syntax error message. For example, to use SELECT to read all parts of an error message from table TRMSG, the key component MSGNUMBER must be specified generically in the [SQL condition](javascript:call_link\('abenwhere_logexp.htm'\)), for example by using LIKE and the wildcard character "%".

Addition 7

... SHORTDUMP-ID sid

Effect

If the subroutine pool does not contain any statically known syntax errors, but an exception is raised during generation, the ID of the runtime error that is assigned to the exception is assigned to the variable sid. A character-like variable or an [inline declaration](javascript:call_link\('abendata_inline.htm'\)) that creates a variable of type string can both be specified for sid.

If the subroutine pool can be generated, the content of sid is not changed.

Notes

-   An exception during generation interrupts the generation, but does not terminate the program. The runtime error is handled internally, but still causes a [database rollback](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") and the [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") to be saved.
    
-   The IDs of runtime errors are contained in the key column ERRID of the database table SNAPT. Texts are assigned to the errors here.
    

Example

Detects and displays any syntax and generation errors that occur when a subroutine pool with errors is generated.

DATA tab TYPE STANDARD TABLE OF string WITH EMPTY KEY.
tab = VALUE #(
  ( \`PROGRAM subpool.\`     )
  ( \`FRM form.\`            )
  ( \` ...\`                 )
  ( \`ENDFORM.\`             ) ).
GENERATE SUBROUTINE POOL tab NAME DATA(prog)
         MESSAGE                  DATA(mess)
         INCLUDE                  DATA(incl)
         LINE                     DATA(line)
         WORD                     DATA(wrd)
         OFFSET                   DATA(off)
         MESSAGE-ID               DATA(mid)
         SHORTDUMP-ID             DATA(sid).
cl\_demo\_output=>display(
  |MESSAGE:      { mess }\\n| &&
  |INCLUDE:      { incl }\\n| &&
  |LINE:         { line }\\n| &&
  |WORD:         { wrd  }\\n| &&
  |OFFSET:       { off  }\\n| &&
  |MESSAGE-ID:   { CONV string( mid ) }\\n| &&
  |SHORTDUMP-ID: { sid }| ).


### abapgenerate_subr_pool_internal.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) →  [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)) → 

GENERATE SUBROUTINE POOL - internal addition

This addition is for internal use only.
It must not be used in application programs.

Addition:

... TRACE-FILE trf

Effect

: Trace outputs are stored in the file specified in trf. This addition automatically activates trace mode.
