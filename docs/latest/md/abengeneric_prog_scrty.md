  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Command%20Injections%2C%20ABENGENERIC_PROG_SCRTY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Command Injections

[ABAP command injections](javascript:call_link\('abenabap_comm_injection_glosry.htm'\) "Glossary Entry"), the injection of malicious ABAP code into programs, is a potential risk in generic programming. The most important statements in generic programming are

-   [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\))
-   [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\))

Both of these statements can be used to create executable ABAP code, some or all of which can originate outside of the program. Careful checks must be made on those parts of programs created in this way that originate from outside of the program. The greater the number of these parts, the more difficult this is. For this reason, it is recommended that all other dynamic programming techniques are tried before resorting to program generation. If it is absolutely necessary to use program generation, the dynamic parts of programs should be kept as few as possible. Persistently saved forms are useful here, in which only placeholders are replaced by dynamic parts and which can otherwise be checked statically. If the content for the placeholders of the forms originate outside the program, they must be checked in accordance with how they are used in the form.

Hints

-   In principle, the ABAP command injections cover all individual security risks listed here. Generic programs containing fully dynamic statements are susceptible to potential injections. See, for example, [SQL Injections Using Generic Programming](javascript:call_link\('abensql_inj_gen_prog_scrty.htm'\)).
-   The [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/dyn\_abap\_log can be used to activate logging of all dynamic source code changes using [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)) [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)), and [DELETE REPORT](javascript:call_link\('abapdelete_report.htm'\)). The database table DYNABAPHDR then contains the associated events, which can be evaluated using the program RDYNABAP\_SHOW. The generic programming statements are also used by the development tools, which means logging of this kind is useful only in non-development systems.

Example

The following program is a perfect example of a worst case scenario. Every user with authorization for this program can enter and execute source code at will. The minimum action that must be taken is to check the development authorization of the current user (see the example for [authorizations](javascript:call_link\('abenauthority_scrty.htm'\))). Another option is to check whether the system in question is a development or production system. Checking entered program code, on the other hand, is very difficult, particularly if the entire program is modifiable (as here) and not just a single line in a pattern.

TYPES prog TYPE TABLE OF string WITH EMPTY KEY.
DATA(text) = concat\_lines\_of( VALUE prog(
  ( |PROGRAM.\\n\\n| )
  ( |FORM do\_it.\\n| )
  ( |  ...\\n| )
  ( |ENDFORM.| ) ) ).
CALL FUNCTION 'DEMO\_INPUT\_TEXT'
  CHANGING
    text\_string = text
  EXCEPTIONS
    canceled    = 4.
IF sy-subrc = 4.
  LEAVE PROGRAM.
ENDIF.
SPLIT text AT |\\n| INTO TABLE DATA(prog).
GENERATE SUBROUTINE POOL prog NAME DATA(pool).
IF sy-subrc = 0.
  PERFORM do\_it IN PROGRAM (pool).
ENDIF.