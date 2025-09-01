# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Structure and Style / Comments

Included pages: 4


### abencomments_gdl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) → 

Comments

Comments do not affect how a program is executed and are ignored by the computer. People who work with the source code, however, benefit greatly from comments, since they make the code easier to understand.

There are two categories of comments in ABAP:

-   Comment lines
    
    A comment line contains a comment and nothing else. It can be defined either by the \* character at the start of the program line, or by the " character at any point of a program line blank to its left.
    
-   End of line comments
    
    An end of line comment is a comment added using the " character and located on the right of an ABAP statement or part of an ABAP statement.
    

A comment line or end of line comment can have any content and this content is ignored when the program is generated using ABAP Compiler.

-   [Language of Comments](javascript:call_link\('abencomment_langu_guidl.htm'\) "Guideline")
-   [Content](javascript:call_link\('abencontent_guidl.htm'\) "Guideline")
-   [Arrangement in the Source Code](javascript:call_link\('abenarrange_guidl.htm'\) "Guideline")

Continue
[Language of Comments](javascript:call_link\('abencomment_langu_guidl.htm'\))
[Content](javascript:call_link\('abencontent_guidl.htm'\))
[Arrangement in the Source Code](javascript:call_link\('abenarrange_guidl.htm'\))


### abencomment_langu_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) →  [Comments](javascript:call_link\('abencomments_gdl.htm'\)) → 

Language of Comments

Background

The natural language that has established itself worldwide for computer programming is English. This is because the language elements in all significant programming languages have been taken from English and their syntax based on English grammar. ABAP is no exception. In fact, efforts have been made to guarantee correct English by giving additions of related statements different names, even if they have the same meaning. Well-known examples include the (now obsolete) additions VARYING and VARY of the statements DO and WHILE. Here, ABAP can even be viewed as a subset of the English language.

Rule

Write program comments in English

Write all comments in ABAP programs in English only, so that as many readers as possible can understand them and benefit from them.

Details

English comments are a basic prerequisite for distributed development at an international level. There are other good reasons for using English as the comment language:

-   If names are in [English](javascript:call_link\('abenname_langu_guidl.htm'\) "Guideline"), the statements of an ABAP program can be considered (with a little good will) to be English sentences. For the reader, English comments are best suited for the source code. If comments in another language were used, this would result in a continuous switching between the languages, which would be exhausting even for readers who can speak the languages used.
-   Frequently, the unwanted [retelling comments](javascript:call_link\('abencontent_guidl.htm'\) "Guideline") are very similar to the described ABAP statements if they are written in English. This way, the author quickly realizes that his comment is superfluous.

Exception

Technical terms that originate from country-specific legislation (such as "Abgeltungssteuer" in German) or specific abbreviations (such as DÜVO) cannot be translated meaningfully or would no longer be recognizable after translation. Such terms should be placed in quotation marks and not be translated into English. In this case, it should be noted that [country-specific characters](javascript:call_link\('abencharacter_set_guidl.htm'\) "Guideline") can be replaced with 7-bit ASCII characters. The goal of the above rule is to enable as many users a possible to follow the program flow. This is still possible if non-IT terms are worded in another language.

Note

This rule applies regardless of the [original language](javascript:call_link\('abenoriginal_langu_guidl.htm'\) "Guideline") chosen.

Bad Example

The following source code shows a typical example of German comments, mixed with English terms, which usually do not even follow the required notation or terminology.

"Horizontales Splittercontrol im Hilfecontainer
CREATE OBJECT splitter\_h
  EXPORTING
    parent = help\_container
    rows = 1
    columns = 2.

"Vertikales Splittercontrol im linken Container
CREATE OBJECT splitter\_v
  EXPORTING
    parent = container\_left
    rows = 2
    columns = 1.

Good Example

The following source code shows the above source code with English comments, as set out in the above rule.

  "Horizontal splitter control in help container
CREATE OBJECT splitter\_h
  EXPORTING
    parent = help\_container
    rows = 1
    columns = 2.

  "Vertical splitter control in left container
CREATE OBJECT splitter\_v
  EXPORTING
    parent = container\_left
    rows = 2
    columns = 1.

The goal of this example is to show the difference between German and English comments. If more meaningful [names](javascript:call_link\('abentelling_names_guidl.htm'\) "Guideline") had been chosen, that is splitter\_horizontal instead of splitter\_h, and so on, comments could be dispensed with altogether, thus complying with the following [rule](javascript:call_link\('abencontent_guidl.htm'\) "Guideline").


### abencontent_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) →  [Comments](javascript:call_link\('abencomments_gdl.htm'\)) → 

Content

Background

It is usually sufficient to examine the ABAP statements to find out what happens in an implementation. However, it much more difficult to find out why something happens. This is often only possible in a much wider context and requires a great deal of effort.

Rule

Make meaningful comments

Write comments for your implementations that describe why something is done and not how.

Details

The best case scenario is where meaningful [identifiers](javascript:call_link\('abennaming_gdl.htm'\)) are used in the source code; the source code effectively documents itself. This is the best way to document the concept of "what happens in this program section". In this case, any additional comments that only describe obvious behavior are superfluous and do not make the code easier to understand. There is also the risk that when changes are made to the program logic, the associated comments are not adapted and are therefore no longer correct. In summary, these comments are not only useless but can even be misleading and should be avoided from the start.

Conversely, developers often tend to assume that their source code is sufficiently self-documenting and leave out descriptive comments. However, this assumption is often incorrect. This becomes apparent when a third party tries to understand the source code (either when attempting to enhance the source code or identify a problem). Even the authors of the code can often face this problem, if they are confronted with source code that they wrote a long time ago and have not seen the source code since.

Even if the identifier names allow readers to easily follow what happens in the code, the question "why" often remains unanswered. Therefore, this information must be provided as comments in the source code. This also includes a description of the algorithms used or at least a list of their names.

Hint

This section mainly deals with commenting the implementation of functions.. Header comments play a different role. Such comments, usually in the form of line comments that start with an asterisk (\*), subdivide large source codes into meaningful sections and can contain administrative entries. Here the rule also applies that these comments should not repeat what is already clearly described in the source code or described by any other means. For example, the person who last changed the program or the change date is indicated in the program attributes. A header comment with the name of a class or method directly above the class or method is also redundant information. However, it makes more sense to differentiate between logical program parts, which cannot be indicated in the code. For example, you can subdivide the program into a global declaration part and an implementation part. Usually, this is only required if the program is not subdivided by [include programs](javascript:call_link\('abensource_code_modular_guidl.htm'\) "Guideline").

Bad Example

The meaning of the comments in the following source code is actually already perfectly obvious due to the commented statements.

"Select udat, stime from trdir
"into change\_date, change\_time
SELECT SINGLE udat, stime
       FROM trdir
       WHERE name = @prog\_name
       INTO (@change\_date, @change\_time).

"Set version\_date, version\_time to change\_date, change\_time
IF sy-subrc = 0.
   IF change\_date > version\_date.
      version\_date = change\_date.
      version\_time = change\_time.
   ELSEIF change\_date = version\_date AND
          change\_time > version\_time.
   version\_time = change\_time.
  ENDIF.
ENDIF.

Good Example

In the following source code, the comments in the above example have been replaced with a description of why something happens.

"If a newer program exists, version time stamp must
"be adjusted to program time stamp
SELECT SINGLE udat, stime
       FROM trdir
       WHERE name = @prog\_name
       INTO (@change\_date, @change\_time).

IF sy-subrc = 0.
   IF change\_date > version\_date.
      version\_date = change\_date.
      version\_time = change\_time.
   ELSEIF change\_date = version\_date AND
          change\_time > version\_time.
   version\_time = change\_time.
  ENDIF.
ENDIF.


### abenarrange_guidl.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) →  [Comments](javascript:call_link\('abencomments_gdl.htm'\)) → 

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
