  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Creating Lists](javascript:call_link\('abenabap_lists.htm'\)) → 

HIDE

[Quick Reference](javascript:call_link\('abaphide_shortref.htm'\))

Syntax

HIDE dobj.

Effect

This statement stores the content of a variable dobj together with the current list line whose line number is contained in sy-linno in the [hide area](javascript:call_link\('abenhide_area_glosry.htm'\) "Glossary Entry") of the current list level. The data type of the variable dobj must be [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") and no field symbols or components of [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") can be specified that point to rows of internal tables, and no class attributes can be specified. The saved values can be read as followed:

-   Any user action on a displayed screen list that causes a list event assigns all values saved using HIDE to the relevant variables.
    
-   If a list line of a list level is read or modified using the statements [READ LINE](javascript:call_link\('abapread_line.htm'\)) or [MODIFY LINE](javascript:call_link\('abapmodify_line.htm'\)), all the values of this line saved using HIDE are assigned to the relevant variables.
    

Notes

-   The HIDE statement works independently of whether the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") was set. In particular, variables for empty list lines can be stored (that is, lines in which the list cursor was positioned using statements like [SKIP](javascript:call_link\('abapskip.htm'\))).
    
-   The HIDE statement should be executed directly in the statement that has set the list cursor in the line.
    
-   Using the HIDE statement on a field symbol can cause runtime errors. The syntax check displays a warning.
    

Example

Saving square numbers and cubic numbers for a list of numbers. The example shows that any variable can be stored independently of the row content. In the real world, one would more likely save only the number and execute the calculation, when required, in the the event block for [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)).

REPORT ...
DATA: square TYPE i,
      cube   TYPE i.
START-OF-SELECTION.
  FORMAT HOTSPOT.
  DO 10 TIMES.
    square = sy-index \*\* 2.
    cube   = sy-index \*\* 3.
    WRITE / sy-index.
    HIDE: square, cube.
  ENDDO.
AT LINE-SELECTION.
  WRITE: square, cube.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: The field is too long for HIDE.
    Runtime error: HIDE\_FIELD\_TOO\_LARGE
    
-   Cause: HIDE in a table row or a component in a table row is not possible.
    Runtime error: HIDE\_ILLEGAL\_ITAB\_SYMBOL
    
-   Cause: HIDE in a local field is not possible.
    Runtime error: HIDE\_NO\_LOCAL: HIDE
    
-   Cause: HIDE is not possible on an empty page.
    Runtime error: HIDE\_ON\_EMPTY\_PAGE
    
-   Cause: Illegal field
    Runtime error: HIDE\_NOT\_GLOBAL
    
-   Cause: Permitted number of HIDE statements per list line exceeded
    Runtime error: HIDE\_TOO\_MANY\_HIDES
    

Continue
![Example](exa.gif "Example") [Lists, HIDE Technique](javascript:call_link\('abenlist_hide_abexa.htm'\))