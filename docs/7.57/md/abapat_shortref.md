  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  A

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AT, ABAPAT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impr
ovement:)

AT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm)

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

[Group level processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengroup_level_processing_glosry.htm "Glossary Entry") within LOOP statements using [internal tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm) or [extraction datasets](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_extract.htm) (obsolete), where statement blocks enclosed in AT and ENDAT are executed depending on conditions.

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