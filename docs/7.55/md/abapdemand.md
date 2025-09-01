  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_storage_obsolete.htm) →  [Contexts (Obsolete)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontext.htm) → 

DEMAND

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdemand_shortref.htm)

Obsolete Syntax

DEMAND val1 = f1 val2 = f2 ...
       FROM CONTEXT context\_ref
       *\[*MESSAGES INTO itab*\]*.

Addition:

[... MESSAGES INTO itab](#!ABAP_ONE_ADD@1@)

Effect

This statement assigns the values of derived fields val1 val2 ... of a [context](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontext_glosry.htm "Glossary Entry") instance to the data objects f1 f2 .... context\_ref expects a data object that points to a context instance (see [CONTEXTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcontexts.htm)). The names of derived fields of the corresponding context can be specified for val1 val2 .... f1 f2 ... expects data objects whose data type conforms with the corresponding context field val1 val2 ....

If the context instance contains valid derived values for the current key, these are assigned directly. Otherwise, the cross-transaction [buffer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontext_buffer.htm) of the context is searched for the corresponding data record, which is then passed to the context instance and from there to the data objects f1 f2 .... Only if no corresponding data is found here, are the values in the modules of the context derived and placed in the buffer, the context instance, and the data objects f1 f2 ....

If not all required values can be derived since not enough key fields are known, processing is stopped, the derived values are initialized, and the module sends the [message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_glosry.htm "Glossary Entry") specified in the context for this purpose.

System Fields

sy-subrc

Meaning

0

The addition MESSAGES is not specified or the internal table specified after MESSAGES is empty

Not 0

The internal table specified after MESSAGES contains messages.

Hint

The structured type context\_t\_con, created using CONTEXTS, can be used to create suitable fields.

Addition

... MESSAGES INTO itab

Effect

The addition MESSAGES is used for handling any messages sent by the modules of a context. If the addition MESSAGES is not specified, each message is sent in accordance with its definition in the context, as described under [Messages](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_messages.htm). If the addition MESSAGES is specified, the messages are not sent; instead, for each message, a line is appended to the internal table itab, which is specified after INTO. The line type of the internal table must refer to the structure SYMSG in ABAP Dictionary. The columns msgty, msgid, msgno, and msgv1 to msgv4 contain the message type, message class, message number, and content of any placeholders. The internal table itab is initialized at the start of the statement DEMAND.

Example

Creates an instance of the context demo\_travel, fills the key fields, and requests the derived values.

CONTEXTS demo\_travel.
PARAMETERS: p\_carrid TYPE context\_t\_demo\_travel-carrid,
            p\_connid TYPE context\_t\_demo\_travel-connid.
DATA: context\_ref TYPE context\_demo\_travel,
      fields TYPE context\_t\_demo\_travel.
SUPPLY carrid = p\_carrid
       connid = p\_connid
       TO CONTEXT context\_ref.
DEMAND cityfrom = fields-cityfrom
       cityto   = fields-cityto
       fltime   = fields-fltime
       FROM CONTEXT context\_ref.
cl\_demo\_output=>display\_text( |{ fields-cityfrom } {
                                 fields-cityto   } {
                                 fields-fltime   }| ).