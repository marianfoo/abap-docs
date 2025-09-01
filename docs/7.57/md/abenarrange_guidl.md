  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) →  [Comments](javascript:call_link\('abencomments_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Arrangement in the Source Code, ABENARRANGE_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

Arrangement in the Source Code

Background   

The arrangement of comments plays an important role (in addition to comment language and comment content) in making programs easy to read.

Rule   

Arrange comments correctly

Place comments in front of the statements that they describe. The horizontal arrangement of comments should follow the indentations of the source code. End of line comments should only be placed after declarative or concluding statements.

Details   

Vertical positioning
In general, when users read source code, they prefer to view the comment first and then the described statements. This arrangement means that the correlation between the comment and the associated source code passage is intuitively clear.

For control structures, this means that comment lines directly before a control statement (such as IF or WHILE) refer to the associated condition and comment lines after the control statement refer to the associated statement block. Comment lines directly before an ELSE or WHEN OTHERS statement have obviously been put in the wrong place.

End of line comments
End of line comments are problematic in conjunction with executable statements. Individual executable program lines are usually not complex enough to justify a separate comment for each one. If you add end of line comments, they will often be [unwanted](javascript:call_link\('abencontent_guidl.htm'\) "Guideline") repetitions of what the statements clearly indicate already. In addition, these comments tend to be cryptic and unclear, because the ends of lines does not provide enough space for meaningful comments in most cases. A uniform alignment for end of line comments can only be achieved with a high degree of effort.

Therefore, you should make comments for entire statement blocks. Use self-contained comment lines to do this. This is because it is difficult to describe a reference to more than one statement line if you use end of line comments.

End of line comments are suitable for the following situations:

-   To comment on declarative statements
-   To indicate block ends (separate from indentations) in larger control structures
-   To justify pseudo comments (at the relevant places) for hiding messages from the extended program check or [Code Inspector](javascript:call_link\('abencode_inspector_guidl.htm'\) "Guideline").

The pseudo comments for hiding warnings of the extended program check and [Code Inspector](javascript:call_link\('abencode_inspector_guidl.htm'\) "Guideline") play a special role. They are not comments in the usual sense of the word. They are program directives that must be appear in the same lines as the commented statements to take full effect. These pseudo comments were replaced by pragmas for the extended program check.

Indentations
Formatting source code using indentations is essential. Otherwise the human reader cannot understand the logical structure. This formatting is required by the rule for using the [pretty printer](javascript:call_link\('abenuse_pretty_printer_guidl.htm'\) "Guideline"). However, if comments are added in the source code that do not follow this formatting, they hide the logical structure and make the code difficult to read. Therefore, comment lines must have the same indentation as the statement lines that they relate to.

These indentations can only be achieved using comments that start with a quotation mark ("), because this character can be in any position. A comment line that starts with an asterisk (\*) must always be in the first position. It is therefore strongly recommended that you start all comments used in procedures ([methods](javascript:call_link\('abenuse_operand_position_guidl.htm'\) "Guideline")) with a quotation mark and the correct indentation. Comment lines that start with a quotation mark must not be confused with end of line comments, which are appear after different code.

Comment lines that start with an asterisk should only be used for head comments of classes and procedures. Here they help to [subdivide](javascript:call_link\('abencontent_guidl.htm'\) "Guideline") source code into logical sections. In addition, they are useful for temporarily disabling statements by commenting them out. The commented-out code can be clearly distinguished from actually indented comments.

Bad Example

The following source code shows the implementation part of a class. The positioning of the comments does not follow the above rule.

CLASS application IMPLEMENTATION. "Application class
  METHOD main. "Main Method

\* Item data
  DATA items  TYPE STANDARD TABLE
              OF REF TO item.
DATA item\_ref LIKE LINE OF items.

\* Amount data
  DATA amount TYPE i.
  DATA total\_amount TYPE i.
  ...

\* Loop over all items to compute total amount
    LOOP AT items INTO item\_ref. "Loop over all items
      IF item\_ref IS BOUND AND
         item\_ref->is\_valid( ) = abap\_true. "Check validity
         amount = item\_ref->get\_amount( ). "Get amount
         ADD amount TO total\_amount. "Add amount to totals
          ...                                          "...
       ELSE.
          ...
      ENDIF.
    ENDLOOP.
    ...
  ENDMETHOD.
ENDCLASS.

Good Example

The following source code shows the same implementation part as above. However, the comments are positioned as recommended. Comment lines that start with an asterisk (\*) are used as header comments in the program structure. End of line comments only appear after declarations and block ends. All other comments appear in comment lines before the described statements and are indented accordingly.

\*----------------------------------------------------------\*
\* Class implementations
\*
\*----------------------------------------------------------\*

CLASS application IMPLEMENTATION.

\*----------------------------------------------------------\*
  METHOD main.
     DATA: items    TYPE STANDARD TABLE
                    OF REF TO item,     "Item table
           item\_ref LIKE LINE OF items. "Item reference
     DATA: amount TYPE i, "Amount per item
           total\_amount TYPE i. "Total amount of items
...

"Loop over all items to compute total amount
LOOP AT items INTO item\_ref.
  IF item\_ref IS BOUND AND
     item\_ref->is\_valid( ) = abap\_true.
     "Compute total amount for valid items
     amount = item\_ref->get\_amount( ).
     ADD amount TO total\_amount.
     ...
  ELSE.
  ENDIF. "item\_ref IS BOUND AND...
ENDLOOP.
...
ENDMETHOD. "main
\*----------------------------------------------------------\*
ENDCLASS. "application