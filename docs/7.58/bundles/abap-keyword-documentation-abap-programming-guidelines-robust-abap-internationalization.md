# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Robust ABAP / Internationalization

Included pages: 7


### abeninternationalization_gdl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internationalization%2C%20ABENINTERNATIONALIZATION_GDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Internationalization

Business software used by internationally operating enterprises has to meet certain localization requirements, for example by providing different logon languages or by meeting different legal requirements. In the SAP environment, the language aspect is known as internationalization and is part of the Globalization [product standard](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencorrectness_quality_guidl.htm "Guideline"). As a consequence, translatable text sources must be used when developing in ABAP, and the technical requirements for handling variable character sets must be respected.

-   [Storing System Texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_text_guidl.htm "Guideline")
-   [Translation-Friendly Message Texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentrans_relevant_text_guidl.htm "Guideline")
-   [Text Environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environm_guidl.htm "Guideline")
-   [Character Set in Source Code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_set_guidl.htm "Guideline")
-   [Splitting Texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensplit_text_guidl.htm "Guideline")
-   [Code Pages for Files](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencodepage_file_guidl.htm "Guideline")

Continue
[Storing System Texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_text_guidl.htm)
[Translation-Friendly Message Texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentrans_relevant_text_guidl.htm)
[Text Environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environm_guidl.htm)
[Character Set of ABAP Source Code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharacter_set_guidl.htm)
[Splitting Texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensplit_text_guidl.htm)
[Code Pages for Files](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencodepage_file_guidl.htm)


### abensystem_text_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternationalization_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Storing%20System%20Texts%2C%20ABENSYSTEM_TEXT_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Storing System Texts

Background   

In ABAP programs, texts are used as parts of processed data but also as a means to communicate with the user. The latter are called system texts, which are delivered with an ABAP application. The ABAP Workbench manages system texts in such a way that they can be translated from the [original language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoriginal_langu_guidl.htm "Guideline") into other languages independently of the actual development object. The following are examples of translatable system texts:

-   Texts and documentation of data elements in the ABAP Dictionary
-   Short texts and documentation of the components of local classes
-   UI texts of dynpros, in Web Dynpro applications and in menu entries
-   Message texts
-   Text pools of ABAP programs that include the text elements of the program, for example, text symbols
-   Texts of the Online Text Repository (OTR)

In addition to translatable system texts, an ABAP program can also contain untranslatable texts. These are usually the [character literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenliterals_guidl.htm "Guideline") and the [comments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomments_gdl.htm) that are stored as a part of the source code.

Rule   

Send only translatable system texts to the user

Specify all texts that a program uses to communicate with the user as translatable system texts. When translatable system texts are created, there must be enough space for translations.

Details   

This rule is not only critical when programs are used in an international environment; it applies when working in [multilingual development groups](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoriginal_langu_guidl.htm "Guideline") too. The prohibition of the use of character literals in the ABAP source code for all texts that are relevant for user dialogs is derived from this rule. Character literals cannot be translated. Their content is independent of the respective logon language. Instead of character literals, [text symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_symbol_glosry.htm "Glossary Entry") should be used or character literals linked with text symbols. This is also checked in the [extended program check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenextended_program_check_guidl.htm "Guideline").

When system texts are created, there must be enough space. It is not usually possible to change the text length during translation, so the translator relies on there being sufficient space for a reasonable translation defined at the development stage. This aspect is very important for longer texts, particularly if the original language is English, because facts can normally be expressed in fewer words in English than in other languages. The opposite can be true for short texts, for example, Feld (German) and field (English), or for compound words that are written as two or more words in English.

Exception

For purely technical texts (such as HTML tags or regular expressions) that are not to be translated, character literals or literal content of string templates can be used. These should be marked as not relevant for translation for the extended program check using pragmas.

Good Example

The following source code shows how to handle translation-relevant and non-translation-relevant text elements in source code: Technical texts that are not relevant for translation are specified as character literals. Other texts are linked with a text symbol. If the additions of the statement CONCATENATE are ignored (for example, SEPARATED BY), it is preferable to use the concatenation operator &&, as shown here, since this makes the source code clearer.

html\_line = '<title>' && 'Some Title'(ttl) && '</title>'.
APPEND html\_line TO html\_body.
...


### abentrans_relevant_text_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternationalization_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Translation-Friendly%20Message%20Texts%2C%20ABENTRANS_RELEVANT_TEXT_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Translation-Friendly Message Texts

Background   

Message texts are translatable [system texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_text_guidl.htm "Guideline"). You can use placeholders in the short and long texts of messages. Placeholders in short texts can either be defined uniquely in the form &i, where i can be a digit between 1 and 4, or anonymously with &.

When the message is sent using the statement MESSAGE, you can use the addition WITH dobj1 ... dobj4, which replaces the placeholders &1 to &4 and & of the short text with the content of data objects dobj1, ..., and dobj4. The content of the first data object replaces the placeholder &1 and the first &, the content of the second replaces &2 and the second &, and so on. In addition, the content of the data objects dobj1, ..., dobj4 is assigned in order to the system fields sy-msgv1 to symsgv4.

Rule   

Do not use anonymous placeholders (&) in message texts

Create placeholders in message texts with the unique names &1, &2, &3, and &4 only.

Details   

As the syntax in the various languages differs, a translator may need to change the order of the replacement texts when translating message texts. However, the translator can adapt the order of replacement texts only if the different placeholders in a message text each have unique names. In messages with multiple placeholders, you should therefore work with the numbered placeholders &1, &2, &3, and &4, instead of using the anonymous placeholder (&).

Hint

The same applies to all other constructs in which such placeholders are possible, for example, GUI titles of classic dynpros. In cases where text in text symbols is explicitly replaced by user-defined placeholders, the placeholders in the text symbol must have unique names and must be known clearly to translators as placeholders that are not supposed to be translated.

Bad Example

A bad example of a message text might look as follows:

In Tabelle & wurde der Eintrag & nicht gefunden

If this message text was translated to

In table & the entry & was not found

this would not cause any problems.

If this message text was translated to

The entry & was not found in table &

a MESSAGE statement when logged on in English would produce an incorrect text.

Good Example

The following message text corrects the bad example:

In Tabelle &1 wurde der Eintrag &2 nicht gefunden

For both translations,

In table &1 the entry &2 was not found

and

The entry &2 was not found in table &1

a MESSAGE statement when logged on in English would produce a correct text.


### abentext_environm_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternationalization_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Text%20Environment%2C%20ABENTEXT_ENVIRONM_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Text Environment

Background   

The [text environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_glosry.htm "Glossary Entry") is part of the runtime framework of an ABAP program and is made up of a text environment language, a locale, and a system code page. All programs in an [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry") have a common text environment.

By default, the text environment of an internal session is determined by the [logon language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogon_language_glosry.htm "Glossary Entry") and can be set programmatically by the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locale.htm). The current text environment language is contained in the system field sy-langu and is returned by the method GET\_LANGUAGE of the class CL\_ABAP\_SYST.

Rule   

If possible, do not switch the text environment within the code

Set the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locale.htm) in exceptional cases only, and reverse any text environment switches in good time.

Details   

ABAP-coded services usually expect the text environment to be specified by the current user's logon language. The services are not designed to handle text environment switches of internal sessions within the code.

If the text environment has to be switched for a specific service due to the following exceptions, this must be done only temporarily. This means that a switched text environment must be reset within the same program context to prevent unexpected behavior in other programs within the same internal session.

Exception

Switching the text environment within the code may be necessary in the following cases:

-   Sorting of texts not written in the logon language using [SORT ... AS TEXT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm) or [CONVERT TEXT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapconvert_text.htm)
-   For accessing external files

Bad Example

The following source code shows a text environment switch within a method, where the text environment is not reset before exiting the method. This poses the danger of continuing within the wrong text environment after returning from the method.

METHOD ...
   SET LOCALE LANGUAGE ...
   ...
ENDMETHOD.

Good Example

The following source code shows a text environment switch within a method, where the text environment is reset to its original state before exiting the method.

METHOD ...
  DATA env\_lang TYPE tcp0c-langu.
  GET LOCALE LANGUAGE env\_lang.
  SET LOCALE LANGUAGE ...
  ...
  SET LOCALE LANGUAGE env\_lang.
ENDMETHOD.


### abencharacter_set_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternationalization_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Character%20Set%20of%20ABAP%20Source%20Code%2C%20ABENCHARACTER_SET_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Character Set of ABAP Source Code

Background   

[ABAP source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_source_code_glosry.htm "Glossary Entry") is edited in the ABAP Editor tool in ABAP Workbench, itself an ABAP program. ABAP Editor saves and processes the ABAP source code internally in a data object (an internal table).

The source code is processed in the current

[text environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_glosry.htm "Glossary Entry") of the developer, using the associated code page.

Rule   

Use only 7-bit ASCII characters in source code

Use only characters from the 7-bit ASCII character set in ABAP source code. This avoids problems in systems with different code pages.

Details   

The 7 bit ASCII character set contains only characters that also exist in all other code pages. Restricting the characters used in source code to this character set guarantees that this code can be edited and executed regardless of the [logon language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogon_language_glosry.htm "Glossary Entry") or [text environment language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_env_langu_glosry.htm "Glossary Entry"). Source code that contains characters from other character sets could, in the worst case, have incorrect syntax in a system with a different code page.

ABAP words in ABAP statements use only 7-bit ASCII characters anyway, which means that this rules to names, literals, and comments.

Hint

Since the programs with the ABAP language version [Standard ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_abap_glosry.htm "Glossary Entry") are now the only possible programs, so names comply with the rule above automatically. Comments are supposed to be [written in English](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencomment_langu_guidl.htm "Guideline") anyway, which removes the need for any country-specific special characters.

In a current system, all [ABAP source code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_source_code_glosry.htm "Glossary Entry") is stored in Unicode and this is why this problem does not occur there. If a guarantee could be given that a program was written only for Unicode systems, the rule above would not be needed for literals and comments (at the very least). It is not possible to ensure that a program is not used in any non-Unicode systems, which is why general robustness rules should always be followed. This ensures that programs can be transported from Unicode systems to non-Unicode systems without conversion losses.


### abensplit_text_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternationalization_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Splitting%20Texts%2C%20ABENSPLIT_TEXT_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Splitting Texts

Background   

Usually the characters in a character string are encoded based on a code page using a fixed number of bytes. This means that it is always known in the memory where a character begins and ends. However, in some code pages, a character can be formed from a combination of multiple separately saved characters. This applies in particular to the characters of the surrogate area of the Unicode character set, that are collectively represented in the Unicode character representation [UTF-16](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutf16_glosry.htm "Glossary Entry") by two consecutive 16-bit replacement codes ([surrogate](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensurrogates_glosry.htm "Glossary Entry")). The surrogate area, for example, includes several Chinese characters that are predominantly used in Hong Kong. The ABAP programming area does not support this area. ABAP supports the subset of UTF-16 covered by [UCS-2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenucs2_glosry.htm "Glossary Entry"), in which each character occupies two bytes. One character in the surrogate area occupies four bytes and is handled as two characters by ABAP.

Rule   

Only split texts between characters

Make sure that statements do not split character strings in any places with composite characters or surrogates.

Details   

Operations that split character strings include:

-   Substring accesses with offsets/lengths or substring functions
-   The SPLIT statement
-   Every assignment to a character-like field that is too short, where one side of the original value is cut off

If texts containing combined characters or surrogates are split, this can produce undefined characters that cannot be displayed. If there is a risk of this occurring, you can define a suitable separation position by using the method STRING\_SPLIT\_AT\_POSITION of classCL\_SCP\_LINEBREAK\_UTIL.


### abencodepage_file_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrobust_abap_gdl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternationalization_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Code%20Pages%20for%20Files%2C%20ABENCODEPAGE_FILE_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Code Pages for Files

Background   

When you open text files on the [host computer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance using the OPEN DATASET statement, you specify the following options that are very important for internationalization:

-   The ENCODING addition specifies the character representation where the content of the file is handled.
-   The WITH BYTE-ORDER MARK addition, which is only possible for UTF-8 files, specifies that a byte order mark (BOM) is inserted at the beginning of a text file when it is written.

If the code page is not specified explicitly when a file is written, it is set implicitly (to UTF-8 in a Unicode system). If nothing is specified, a BOM is not set.

Rule   

Write text files in UTF-8 and with a byte order mark.

Open text files for output explicitly in the UTF-8 code page. The byte order mark should be inserted and taken into account when the file is read.

Details   

When a file is read, the code page used is usually very difficult to identify. However, if the byte-order mark is inserted, a file is clearly defined as a UTF-8. Therefore, you should always specify the ENCODING UTF-8 WITH BYTE-ORDER MARK additions when opening a text output file with the OPEN DATASET statement. When a text file of this type is read, it should only be opened with the SKIPPING BYTE-ORDER MARK addition, so that the byte order mark is automatically skipped and does not appear in the read application data.

Exception

Files used for data exchange with applications that do not support UTF-8 format must be output in a suitable code page.

Bad Example

The following source code shows how a text file is opened for writes without explicitly specifying the code page. In Unicode systems, UTF-8 is selected implicitly, but a byte order mark is not inserted.

OPEN DATASET dset
  FOR OUTPUT IN TEXT MODE
  ENCODING DEFAULT.

Good Example

The following source code shows how a text file is opened for writes by explicitly specifying the UTF-8 code page and using the byte order mark.

OPEN DATASET dset
  FOR OUTPUT IN TEXT MODE
  ENCODING UTF-8 WITH BYTE-ORDER MARK.
