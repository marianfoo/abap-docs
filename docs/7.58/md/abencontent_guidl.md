---
title: "Content of Comments"
description: |
  Background It is usually sufficient to examine the ABAP statements to find out what happens in an implementation. However, it much more difficult to find out why something happens. This is often only possible in a much wider context and requires a great deal of effort. Rule Make meaningful comments
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontent_guidl.htm"
abapFile: "abencontent_guidl.htm"
keywords: ["select", "do", "if", "case", "method", "class", "abencontent", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_style_gdl.htm) →  [Comments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomments_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Content%20of%20Comments%2C%20ABENCONTENT_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Content of Comments

Background   

It is usually sufficient to examine the ABAP statements to find out what happens in an implementation. However, it much more difficult to find out why something happens. This is often only possible in a much wider context and requires a great deal of effort.

Rule   

Make meaningful comments

Write comments for your implementations that describe why something is done and not how.

Details   

The best case scenario is where meaningful [identifiers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennaming_gdl.htm) are used in the source code; the source code effectively documents itself. This is the best way to document the concept of what happens in this program section. In this case, any additional comments that only describe obvious behavior are superfluous and do not make the code easier to understand. There is also the risk that when changes are made to the program logic, the associated comments are not adapted and are therefore no longer correct. In summary, these comments are not only useless but can even be misleading and should be avoided from the start.

Conversely, developers often tend to assume that their source code is sufficiently self-documenting and leave out descriptive comments. However, this assumption is often incorrect. This becomes apparent when a third party tries to understand the source code (either when attempting to enhance the source code or identify a problem). Even the authors of the code can often face this problem, if they are confronted with source code that they wrote a long time ago and have not seen the source code since.

Even if the identifier names allow readers to easily follow what happens in the code, the question why often remains unanswered. Therefore, this information must be provided as comments in the source code. This also includes a description of the algorithms used or at least a list of their names.

Hint

This section mainly deals with commenting the implementation of functions.. Header comments play a different role. Such comments, usually in the form of line comments that start with an asterisk (\*), subdivide large source codes into meaningful sections and can contain administrative entries. Here the rule also applies that these comments should not repeat what is already clearly described in the source code or described by any other means. For example, the person who last changed the program or the change date is indicated in the program properties. A header comment with the name of a class or method directly above the class or method is also redundant information. However, it makes more sense to differentiate between logical program parts, which cannot be indicated in the code. For example, you can subdivide the program into a global declaration part and an implementation part. Usually, this is only required if the program is not subdivided by [include programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_code_modular_guidl.htm "Guideline").

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