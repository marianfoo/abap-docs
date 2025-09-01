  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Typing%20Formal%20Parameters%20in%20ABAP%20Release%203.0%2C%20ABENNEWS-30-CONVERTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

Typing Formal Parameters in ABAP Release 3.0

Note: The following functions can no longer be used from Release 4.6A.

When Utilities → Typing is chosen in ABAP Editor, a conversion program is called which types the formal parameters of all [FORM](javascript:call_link\('abapform.htm'\)) routines of an ABAP program and its includes.

Conversion is possible if all the actual parameters associated with a particular formal parameter match in type and length, meaning that they are technically similar or all actual parameters have the same type (for example, C).

If there are multiple [compilation units](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") for an include, this is indicated at the end of the list. Conversion proposals are still made, but they refer only to the current compilation unit. The names of the FORM routines defined in this include appear in the list of conversion proposals underlined in red.

If there are external calls for a FORM routine, no conversion proposal is made. The names of these FORM routines are displayed at the end of the list.

If conversion is not possible, the reason is given at the end of the line. Possible causes are:

-   Leng - Different lengths
-   Type - Different data types
-   Loca - Actual parameter are locally defined variables
-   <..> - Field symbol
-   +(.) - Offset/length specification
-   Recu - Recursive call of the FORM routine
-   Parm - Nesting: The actual parameter is the formal parameter of a FORM routine where at least one parameter is typed but the actual/formal parameter is not typed.
-   Expe - Nesting: The actual parameter is the formal parameter of a FORM routine that is called only externally (or in other compilation units of the same include).

It is possible to select and view the subroutines in the program code. If the FORM routine is to be converted, the checkbox must be selected and Convert Code chosen. After the conversion, the checkbox can no longer be selected for the converted FORM routine. The program now contains the old FORM routine as a comment. Before this, the new converted FORM routine was inserted.