  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Inline Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninline_declarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FINAL%2C%20Inline%20Declaration%20for%20Immutable%20Variables%2C%20ABENFINAL_INLINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

FINAL, Inline Declaration for Immutable Variables

Syntax

... FINAL(var) ...

Effect

Declaration of an [immutable variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenimmutable_variable_glosry.htm "Glossary Entry"). A declaration expression with the declaration operator FINAL in general works in the same way as an inline declaration with the declaration operator [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_inline.htm) and the same general rules apply.

While DATA declares a regular variable, FINAL declares an immutable variable: The write position where the variable var is declared with FINAL is the only one, where a value can be assigned to that variable in the current [context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobj_context_glosry.htm "Glossary Entry"). In all other positions, any write access leads either to a syntax error or the uncatchable exception MOVE\_TO\_LIT\_NOTALLOWED\_NODATA.

The declaration operator FINAL can be used in the same [declaration positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclaration_position_glosry.htm "Glossary Entry") as the operator DATA with one exception: FINAL cannot be used behind [OPEN CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm) because usually there is always a second write access with [CLOSE CURSOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclose_cursor.htm) in the same context.

Hints

-   The fact that there is only one write position for FINAL in a context does not mean that only one write access can be executed at runtime. For example, the declaration operator FINAL can be positioned inside a loop or it can be used after INTO in a [LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm) statement. Then a value is assigned multiple times to var, but var cannot be changed in any other write position.
-   If a data object called final already exists in the current context, FINAL(var) is interpreted as a [substring access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoffset_length.htm) and not as an inline declaration.

Programming Guideline

[Immutable Variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenimmutable_variables_guidl.htm "Guideline")

Example

Four immutable variables date, yesterday, result, and wa are declared inline with FINAL. They can be used at read positions but any attempt using them at write positions would lead to a syntax error or an exception.

FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ).
FINAL(yesterday) = CONV d( date - 1 ).
"yesterday -= 1. <-- Syntax error
SELECT carrid, connid, seatsocc
       FROM sflight
       WHERE fldate = @yesterday
       INTO TABLE @FINAL(result).
LOOP AT result INTO FINAL(wa).
  ...
  "wa-seatsocc = 0. <-- Syntax error
  ...
ENDLOOP.
"APPEND wa TO result. <-- Syntax error

Example

Inline declaration of an internal table as a target field of a [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement and inline declaration of a variable for the table transformed to HTML. The data type of the variable is determined by the return value of the method.

SELECT \*
       FROM scarr
       INTO TABLE @FINAL(itab).
FINAL(html) = cl\_demo\_output=>get( itab ).