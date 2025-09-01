  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

WINDOW

[Quick Reference](javascript:call_link\('abapwindow_shortref.htm'\))

Syntax

WINDOW STARTING AT col1 lin1
       *\[*ENDING  AT col2 lin2*\]*.

Effect

This statement initiates the display of the current details list in a dialog box. It only works in the event blocks for an interactive list event. If there are multiple WINDOW statements in an event block, the last one is valid.

The upper left corner is determined for the column and the row by the values in col1 and lin1. The values are based on the GUI window of the basic list. The lower right corner is set automatically. The maximum lower right corner can either be specified in col2 and lin2 or is specified using the lower right corner of the GUI window where the list event took place.

col1, lin1, col2, and lin2 expect data objects of the type i. The values of all data objects should lie within the GUI window of the basic list and the values of col1 and lin1 should be less than those of col2 and lin2. If not, the behavior is undefined.

If no GUI status is set using [SET PF-STATUS](javascript:call_link\('abapset_pf-status_list.htm'\)) and an event block is defined using [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)) or [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\)), the system automatically uses a [standard list status](javascript:call_link\('abenstandard_list_status_glosry.htm'\) "Glossary Entry") suitable for the dialog box without a [menu bar](javascript:call_link\('abenmenu_bar_glosry.htm'\) "Glossary Entry") and [system toolbar](javascript:call_link\('abenstandard_toolbar_glosry.htm'\) "Glossary Entry"). This includes pushbuttons for the predefined function codes "PICK" (only for AT LINE-SELECTION), "PRI", "%SC", "%SC+", and "RW" in the [application toolbar](javascript:call_link\('abenapplication_toolbar_glosry.htm'\) "Glossary Entry").

Note

If a GUI status is set using SET PF-STATUS, this should be created in [Menu Painter](javascript:call_link\('abenmenu_painter_glosry.htm'\) "Glossary Entry") as a dialog box status; the list template should also be included.

Example

Displays the details of an airline in a dialog box after a row is selected.

DATA: scarr\_wa TYPE scarr,
      col      TYPE i,
      lin      TYPE i.
START-OF-SELECTION.
   SELECT carrid
          FROM scarr
          INTO scarr\_wa-carrid.
    WRITE / scarr\_wa-carrid.
    HIDE  scarr\_wa-carrid.
  ENDSELECT.
  CLEAR scarr\_wa-carrid.
AT LINE-SELECTION.
  col = sy-cucol + 40.
  lin = sy-curow + 2.
  WINDOW STARTING AT sy-cucol sy-curow
         ENDING   AT col lin.
  IF sy-lsind = 1 AND
     scarr\_wa-carrid IS NOT INITIAL.
    SELECT SINGLE carrname, url
           FROM scarr
           WHERE carrid = @scarr\_wa-carrid
           INTO (@scarr\_wa-carrname, @scarr\_wa-url).
    WRITE: scarr\_wa-carrname, / scarr\_wa-url.
  ENDIF.

Continue
![Example](exa.gif "Example") [Lists, Dialog Boxes](javascript:call_link\('abenlist_window_abexa.htm'\))