---
title: "Modern ABAP"
description: |
  Background ABAP is a living programming language that is continually being developed. Since its introduction some 30 years ago, new ABAP programs have been developed continually, with work to advance the ABAP language ongoing at the same time. Developments to the ABAP language are either extensions
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmodern_abap_guidl.htm"
abapFile: "abenmodern_abap_guidl.htm"
keywords: ["loop", "do", "while", "if", "case", "try", "method", "class", "data", "abenmodern", "abap", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [ABAP-Specific Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_specific_rules_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Modern%20ABAP%2C%20ABENMODERN_ABAP_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Modern ABAP

Background   

ABAP is a living programming language that is continually being developed. Since its introduction some 30 years ago, new ABAP programs have been developed continually, with work to advance the ABAP language ongoing at the same time. Developments to the ABAP language are either extensions of the existing language properties for implementing new functions, or they replace existing functions with more advanced concepts. The replacement of existing language elements with new ones usually makes the existing language elements superfluous or obsolete. The most prominent example of a development of the ABAP language is still the implementation of ABAP Objects.

With regard to the ABAP language, SAP has committed itself to a policy of strict downward compatibility. On the one hand, this means that an ABAP program written for ABAP release 3.0, for example, can be executed on an AS ABAP in ABAP release 7.0 or higher (provided that a non-Unicode system is being used). On the other hand, this also has the following implications:

-   Until now, there was little impetus for experienced developers to break with old habits and engage in new concepts. The only exception is the changeover to Unicode systems, where ABAP programs have to be converted to the ABAP language version [Standard ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_abap_glosry.htm "Glossary Entry"), which has slightly different syntax rules.
-   ABAP beginners get confused by the multitude of options available for the same task. Where there is doubt, older programs are used as templates, and the obsolete concepts are frequently still used instead of the new ones.

These problems can be solved using the following simple rule.

Rule   

Do not use obsolete language elements

Do not use obsolete language elements for new developments. We also recommend an incremental changeover to new concepts as they become available.

Details   

Newer language elements are always the better language elements. Obsolete language elements are only provided for downward compatibility reasons. A statement or statement addition is declared as obsolete only when a more powerful alternative exists or when the language element is identified as being prone to errors (in the sense that it invites insecure and non-robust programming). It follows that you cannot ensure secure and robust programming if you use obsolete language elements, which is why obsolete language elements should not be used for new developments.

If ABAP Objects is used, the majority of the obsolete statements and additions are already prohibited in the syntax. For this reason among others, we strongly recommend [using ABAP Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obj_progr_model_guidl.htm "Guideline"). Outside of ABAP Objects, that is in cases that are [still allowed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obj_progr_model_guidl.htm "Guideline"), no obsolete language elements can be used. [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) provides an overview of the obsolete statements and statement additions.

Bad Example

The following source code shows the solution of a task using obsolete language elements. A procedure is supposed to replace all occurrences of substring in a text with a new character string new if the substring is not at the end of a word.

FORM bad\_example USING    substring TYPE csequence
                          new       TYPE csequence
                 CHANGING text      TYPE csequence.
  DATA: pattern TYPE string,
        subrc   TYPE sy-subrc.
  CONCATENATE '\*' substring INTO pattern.
  SEARCH text FOR pattern.
  IF sy-subrc <> 0.
    CLEAR subrc.
    WHILE subrc = 0.
      REPLACE substring WITH new INTO text.
      subrc = sy-subrc.
    ENDWHILE.
  ENDIF.
ENDFORM.

In the above source code, aside from the modularization with FORM - ENDFORM, the statement SEARCH and the used variant of REPLACE are obsolete. Furthermore, a string operator && is available as a replacement for CONCATENATE.

Good Example

The following source code executes the same task as above; however, it uses the latest available language elements.

METHOD good\_example.
  FIND PCRE substring && \`\\b\` IN text.
  IF sy-subrc <> 0.
    REPLACE ALL OCCURRENCES OF substring IN text WITH new.
  ENDIF.
ENDMETHOD.

The subroutine is replaced with a method. Using FIND together with a regular expression composed using the string operator && makes helper variables superfluous. The WHILE loop is replaced with REPLACE ALL OCCURRENCES, which means it is unnecessary to use another helper variable, and the control flow is moved to the ABAP runtime framework. The latter increases the execution speed and helps to [limit the maximum nesting depth](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennesting_depth_guidl.htm "Guideline").

Note

In connection with the above rule, the question on the coexistence of old and new concepts within a program unit arises. There is only one area in which this is clearly defined in the syntax, namely when using the [classic exception concept and the class-based exception concept](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_exception_guidl.htm "Guideline") in processing blocks. Otherwise, obsolete language elements can be directly next to new language elements in a program part. In this context, we recommend keeping the use within a context as consistent as possible, that is, do not use different statements, such as FIND and SEARCH, in parallel for the same purpose.

This does not, however, mean that obsolete language elements should be used in enhancements to existing procedures to preserve consistency just because they already exist. Instead, this is the best moment to switch the entire procedure to the corresponding new language elements. By using unit tests to cover the procedures to be changed, it is possible to ensure that there are no unpleasant surprises during the changeover.