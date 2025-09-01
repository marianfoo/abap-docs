  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Specifying%20Individual%20Operands%2C%20ABENOPERANDS_SPECIFYING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Specifying Individual Operands

There are three ways to specify the [names of operands](javascript:call_link\('abenoperands_names.htm'\)):

-   [Static Specification](#abenoperands-specifying-1-------dynamic-specification-in-parentheses---@ITOC@@ABENOPERANDS_SPECIFYING_2)
-   [Dynamic Specification](#abenoperands-specifying-3---static-specification-----the-name-of-the-operand-must-be-specified-directly--if-the-name-of-a-data-object-is-specified--the-specified-name-is-used-and-not-the-content-of-the-data-object---example--cl--demo--spfli--get--spfli------dynamic-specification-in-parentheses-----for-some-statements-that-normally-expect-a-static-specification--there-is-a-syntactic-form-that-allows-the-name-of-a-character-like-data-object-to-be-specified-in-parentheses-at-the-operand-position--at-the-time-of-execution--the-data-object-must-contain-the-actual-name-of-the-operand---example--data-meth-----get--spfli---call-method-cl--demo--spfli---meth----for-statements-that-contain-lists-of-operands-or-full-parts-of-statements--an-internal-table-with-a-character-like-line-type-can-often-be-specified-in-parentheses--the-table-lines-must-then-contain-the-tokens-or-the-names-of-the-individual-operands---example--data-itab-type-table-of-string-with-empty-key--itab---value--------carrid----lh--and--------------------------connid----400-------------select-----------from-spfli--------where--itab---------into-table-FINAL(result).

Dynamic Specification   

At many operand positions, the system expects character-like data objects that contain the actual names of the individual operands at the time of execution. To enable the static specification of these operands, literals must be used.

Hint

In some rare cases, there may be exceptions to these rules, where operands must be set directly in parentheses or quotation marks as literals, but no data objects can be specified. This is noted in the corresponding syntax descriptions.

Example

CALL FUNCTION dobj.