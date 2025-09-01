---
title: "Storing System Texts"
description: |
  Background In ABAP programs, texts are used as parts of processed data but also as a means to communicate with the user. The latter are called system texts, which are delivered with an ABAP application. The ABAP Workbench manages system texts in such a way that they can be translated from the origi
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_text_guidl.htm"
abapFile: "abensystem_text_guidl.htm"
keywords: ["do", "if", "try", "class", "data", "abensystem", "text", "guidl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrobust_abap_gdl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternationalization_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Storing%20System%20Texts%2C%20ABENSYSTEM_TEXT_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Storing System Texts

Background   

In ABAP programs, texts are used as parts of processed data but also as a means to communicate with the user. The latter are called system texts, which are delivered with an ABAP application. The ABAP Workbench manages system texts in such a way that they can be translated from the [original language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoriginal_langu_guidl.htm "Guideline") into other languages independently of the actual development object. The following are examples of translatable system texts:

-   Texts and documentation of data elements in the ABAP Dictionary
-   Short texts and documentation of the components of local classes
-   UI texts of dynpros, in Web Dynpro applications and in menu entries
-   Message texts
-   Text pools of ABAP programs that include the text elements of the program, for example, text symbols
-   Texts of the Online Text Repository (OTR)

In addition to translatable system texts, an ABAP program can also contain untranslatable texts. These are usually the [character literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenliterals_guidl.htm "Guideline") and the [comments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomments_gdl.htm) that are stored as a part of the source code.

Rule   

Send only translatable system texts to the user

Specify all texts that a program uses to communicate with the user as translatable system texts. When translatable system texts are created, there must be enough space for translations.

Details   

This rule is not only critical when programs are used in an international environment; it applies when working in [multilingual development groups](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoriginal_langu_guidl.htm "Guideline") too. The prohibition of the use of character literals in the ABAP source code for all texts that are relevant for user dialogs is derived from this rule. Character literals cannot be translated. Their content is independent of the respective logon language. Instead of character literals, [text symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_symbol_glosry.htm "Glossary Entry") should be used or character literals linked with text symbols. This is also checked in the [extended program check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextended_program_check_guidl.htm "Guideline").

When system texts are created, there must be enough space. It is not usually possible to change the text length during translation, so the translator relies on there being sufficient space for a reasonable translation defined at the development stage. This aspect is very important for longer texts, particularly if the original language is English, because facts can normally be expressed in fewer words in English than in other languages. The opposite can be true for short texts, for example, Feld (German) and field (English), or for compound words that are written as two or more words in English.

Exception

For purely technical texts (such as HTML tags or regular expressions) that are not to be translated, character literals or literal content of string templates can be used. These should be marked as not relevant for translation for the extended program check using pragmas.

Good Example

The following source code shows how to handle translation-relevant and non-translation-relevant text elements in source code: Technical texts that are not relevant for translation are specified as character literals. Other texts are linked with a text symbol. If the additions of the statement CONCATENATE are ignored (for example, SEPARATED BY), it is preferable to use the concatenation operator &&, as shown here, since this makes the source code clearer.

html\_line = '<title>' && 'Some Title'(ttl) && '</title>'.
APPEND html\_line TO html\_body.
...