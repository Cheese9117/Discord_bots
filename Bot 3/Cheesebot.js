import discord
 
from discord.ext import commands
 
bot = commands.Bot(command_prefix=".", intents=discord.Intents.all(), status=discord.Status.dnd, activity=discord.Activity(type=discord.ActivityType.watching, name="a Spreen"))
 
@bot.event
async def on_ready():
    print(f"Conectado como: {bot.user}")
 
@bot.tree.command(name="ping", description="Comando de barra")
async def ping(interaction: discord.Interaction):
    await interaction.response.send_message("Pong")

@bot.tree.command(name="sorpresita", description="Te gustara")
async def Sorpresita(interaction: discord.Interaction):
    await interaction.response.send_message("Eres mas que cualquier persona en este mundo, lo eres todo para mi.")

@bot.command()
async def sincronizar(ctx):
    await bot.tree.sync()
    await ctx.send("Listo!")

bot.run("Token Discord")
