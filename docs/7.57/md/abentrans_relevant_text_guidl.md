  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrobust_abap_gdl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternationalization_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Translation-Friendly Message Texts, ABENTRANS_RELEVANT_TEXT_GUIDL, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Translation-Friendly Message Texts

Background   

Message texts are translatable [system texts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_text_guidl.htm "Guideline"). You can use placeholders in the short and long texts of messages. Placeholders in short texts can either be defined uniquely in the form &i, where i can be a digit between 1 and 4, or anonymously with &.

When the message is sent using the statement MESSAGE, you can use the addition WITH dobj1 ... dobj4, which replaces the placeholders &1 to &4 and & of the short text with the content of data objects dobj1, ..., and dobj4. The content of the first data object replaces the placeholder &1 and the first &, the content of the second replaces &2 and the second &, and so on. In addition, the content of the data objects dobj1, ..., dobj4 is assigned in order to the system fields sy-msgv1 to symsgv4.

Rule   

Do not use anonymous placeholders (&) in message texts

Create placeholders in message texts with the unique names &1, &2, &3, and &4 only.

Details   

As the syntax in the various languages differs, a translator may need to change the order of the replacement texts when translating message texts. However, the translator can adapt the order of replacement texts only if the different placeholders in a message text each have unique names. In messages with multiple placeholders, you should therefore work with the numbered placeholders &1, &2, &3, and &4, instead of using the anonymous placeholder (&).

Hint

The same applies to all other constructs in which such placeholders are possible, for example, GUI titles of classic dynpros. In cases where text in text symbols is explicitly replaced by self-defined placeholders, the placeholders in the text symbol must have unique names and must be known clearly to translators as placeholders that are not supposed to be translated.

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