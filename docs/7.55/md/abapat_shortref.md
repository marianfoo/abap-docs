  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  A

AT - Quick reference

[Reference](javascript:call_link\('abapat_itab.htm'\))

Syntax

*\[*AT FIRST.
   ...
ENDAT.*\]*
  *\[*AT field\_groupi *\[*WITH field\_groupj*\]*.
    ...
  ENDAT.*\]*
    *\[*AT NEW comp1.
       ...
     ENDAT.
       ...
         *\[*AT NEW comp2.
            ...
         ENDAT.
           *\[*...*\]**\]**\]*
             *\[* ... *\]*
         *\[**\[**\[*...*\]*
         AT END OF comp2.
              ...
           ENDAT.*\]*
       ...
     AT END OF comp1.
       ...
     ENDAT.*\]*
*\[*AT LAST.
    ...
ENDAT*\]*.

Effect

[Group level processing](javascript:call_link\('abengroup_level_processing_glosry.htm'\) "Glossary Entry") within LOOP statements using [internal tables](javascript:call_link\('abapat_itab.htm'\)) or [extraction datasets](javascript:call_link\('abapat_extract.htm'\)) (obsolete), where statement blocks enclosed in AT and ENDAT are executed depending on conditions.

Additions

-   FIRST
    First line of the internal table or the extraction dataset.
    

-   field\_groupi
    Line of the extraction dataset that was appended by the statement EXTRACT field\_groupi.
    

-   WITH field\_groupj
    Condition that the next line was appended by EXTRACT field\_groupj.
    

-   NEW comp1, NEW comp2, ...
    First line of a group with the same content in the components comp1, comp2, ... and in the components on the left of comp1, comp2, ...
    

-   END OF comp1, END OF comp2, ...
    Last line of a group with the same content in the components comp1, comp2, ... and in the components on the left of comp1, comp2, ...
    

-   LAST
    Last line of the internal table or the extraction dataset.